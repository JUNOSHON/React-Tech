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
  const getData = async () => {
    const res = await fetch("http://223.130.139.67:8000/Issue/").then((res) =>
      res.json());
    
    const initData = res.slice(0, 20).map((it) => {
      return {
        id: it.id,
        title: it.title,
        country:it.country,
      };
    });
    
    setData(initData);
  };
  
  
  useEffect(async () => {
    
     await getData();
    
  }, []);
  
  
  return (
    <div>
      {data}
    
    </div>
  );
}

export default App;
