import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Home from "./components/Content/Home";
import NavBar from "./components/Nav/NavBar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home}></Route>
      <Route path="/:id" component={Content}></Route>
    </div>
  );
}

export default App;
