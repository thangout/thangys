import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Download from "./pages/Download";
import Information from "./pages/Information";
import Footer from "./pages/Footer";
import { Container } from '@material-ui/core';



function App() {
  return (
      <Router>

        <Container>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">O mne</Link>
            </li>
            <li>
              <Link to="/download">Stahnout</Link>
            </li>
            <li>
              <Link to="/information">Informace</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/download">
              <Download />
            </Route>
            <Route path="/information">
              <Information />
            </Route>
          </Switch>
        </div>
        </Container>

        <Footer/>
      </Router>
  )
}

export default App;
