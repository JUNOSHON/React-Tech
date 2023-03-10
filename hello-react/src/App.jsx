import logo from "./logo.svg";
import "./App.css";
import {Fragment} from "react";
import Mycomponent from "./Mycomponent";
import Say from "./Say";
import EventPractice from "./EventPractice";
import IterationSample from "./IterationSample";

const App = () => {
  
  return (
    <Fragment>
     {/* <Mycomponent name="JUNO" favoriteNumber={3}>리액트</Mycomponent>
      <Say></Say>
      <Mycomponent name="JUNO" favoriteNumber={3} title="Hello">리액트</Mycomponent>
      <EventPractice/>*/}
      <IterationSample/>
    < /Fragment>
  );
};

export default App;
