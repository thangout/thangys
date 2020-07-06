import React, { useEffect, useState } from 'react';
import {
    Typography,
    Paper,
    Card,
    CardContent,
    CardActionArea 
}  from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    marginBottom: 12,
    background: {
        color: "red"
    }
  },
});


const Footer = () =>{

  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
        <Typography>Paticka</Typography>
    </div>

    </>
  )
}

export default Footer;



