import logo from "./logo.svg";
import "./App.css";
import {Fragment} from "react";
import Mycomponent from "./Mycomponent";
import Say from "./Say";

const App = () => {
  
  return (
    <Fragment>
      <Mycomponent name="JUNO" favoriteNumber={3}>리액트</Mycomponent>
      <Say></Say>
    < /Fragment>
  );
};

export default App;
