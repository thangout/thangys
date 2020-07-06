import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import czcData from './data/czc.json';
//import alzaData from './data/alza.json';

import influencer from './data/influencer/1-leos.json';
//import influencer from './data/influencer/2-kral.json';
//import influencer from './data/influencer/3-beny.json';
//import influencer from './data/influencer/4-sulcova.json';
//import influencer from './data/influencer/5-ment.json';
//import influencer from './data/influencer/6-shopaholic.json';
//import influencer from './data/influencer/7-kovy.json';
import { CSVLink } from "react-csv";

import Hashtags from './pages/Hashtags';

function HashtagApp() {

  const wordFilter = [
    "a",
    "na",
    "se",
    "to",
    "jsem",
    "z",
    "za",
    "s",
    "si",
    "v",
    "o",
    "ale",
    "po",
    "tu",
    "jako",
    "jak",
    "me",
    "tak",
    "i",
    "je",
    "ze",
    "do",
    "the",
  ]

  const [hashtags, setHashtags] = useState([]);
  const [data, setData] = useState([]);

  useEffect(()=>{ 
    fetchData()
  },[data]);

  const fetchData = async () => {
    //setData(czcData);
    setData(influencer);
    //handleDataInfluencer()
    handleData()
  }

  const handleDataInfluencer = () =>{
    console.log(data);

    let tmpArray = [];

    let histogram = {}

    data.map(item =>{
      //let extractedHashtags = getHashTags(item.firstComment);

      if("firstComment" in item){
        //let extractedHashtags = item.firstComment.match(/#\w+/g);
        let extractedWords = item.caption.split(" ");
        if(extractedWords != null){
          extractedWords = extractedWords.map(word => {
            let tmpWord = word;
            tmpWord = tmpWord.replace(/\?/g,'')
            tmpWord = tmpWord.replace(/\!/g,'')
            tmpWord = tmpWord.replace(/\,/g,'')
            tmpWord = tmpWord.replace(/\"/g,'')
            tmpWord = tmpWord.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            return tmpWord.toLowerCase()
          })

          extractedWords = extractedWords.filter(word => {
            return !wordFilter.includes(word)
          })

          tmpArray = tmpArray.concat(extractedWords);
        }
      }
    })

    //count cetnosti
    tmpArray.map(item =>{
      if(histogram[item] == null ){
       histogram[item] = 1; 
      }else{
        histogram[item] = histogram[item] + 1
      }
    })

    let keysSorted = Object.keys(histogram).sort(function(a,b){return histogram[a]-histogram[b]})
    keysSorted = keysSorted.reverse();

    let tenMostUsedHashtags = [];
    for (let index = 0; index < keysSorted.length; index++) {
      const el = keysSorted[index];
      let paired = {hashtag: el, count: histogram[el]}
      //tenmostusedhashtags.push(el + ' count:' + histogram[el]);
      tenMostUsedHashtags.push(paired);
    }

    console.log(tmpArray)
    setHashtags(tenMostUsedHashtags)
  }

  const handleData = () =>{
    console.log(data);
    let tmpArray = [];

    let histogram = {}

      data.map(item =>{
        //let extractedHashtags = getHashTags(item.firstComment);
        if("caption" in item){
          let extractedHashtags = item.caption.match(/#\w+/g);
          if(extractedHashtags != null){
            //tmpArray = tmpArray.concat(extractedHashtags);
            let tmpIn = item.hashtags.map(i => "#" + i);
            tmpArray = tmpArray.concat(tmpIn);
          }
        }
      })


    //count cetnosti
    tmpArray.map(item =>{
      if(histogram[item] == null ){
       histogram[item] = 1; 
      }else{
        histogram[item] = histogram[item] + 1
      }
    })

    //serazeni od nejcetnejsich nahore
    let keysSorted = Object.keys(histogram).sort(function(a,b){return histogram[a]-histogram[b]})
    keysSorted = keysSorted.reverse();

    let tenMostUsedHashtags = [];
    for (let index = 0; index < 1500; index++) {
      const el = keysSorted[index];
      let paired = {hashtag: el, count: histogram[el]}
      //tenmostusedhashtags.push(el + ' count:' + histogram[el]);
      tenMostUsedHashtags.push(paired);
    }

    setHashtags(tenMostUsedHashtags)
  }

  /* Extract hashtags text from string as an array */
const  getHashTags = (inputText) => {  
    var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    var matches = [];
    var match;

    while ((match = regex.exec(inputText))) {
        matches.push(match[1]);
    }

    return matches;
}

const headers = [
  { label: "Weight", key: "count" },
  { label: "Word", key: "hashtag" },
];

  return (
    <div className="App">
      <Hashtags/>
      <h1>Hastags</h1>
      <CSVLink data={hashtags} headers={headers}>
        Download me
      </CSVLink>;
      <table>
      {
      hashtags.map((item) => {
        return (
        <tr>
          <td>{item.hashtag}</td>
          <td>{item.count}</td>
        </tr>
        )
      })
      } 
       </table>

    </div>
  );
}

export default HashtagApp;
