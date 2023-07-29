import logo from "./logo.svg";
import "./App.css";
import {Fragment, useEffect, useState} from "react";
import Yeachan from "./Yeachan";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import axios from "axios";


function App() {
  
  
  const [data, setData] = useState([]);
  
  const getData = () => {
    fetch("http://223.130.139.67:8000/Issue/1", {})
      .then(res => res.json())
      .then((res) => setData(res.title));
    
  };
  
  
  useEffect(() => {
    getData();
  }, []);
  
  
  return (
    <div>
      {data}
    
    </div>
  );
}

export default App;
