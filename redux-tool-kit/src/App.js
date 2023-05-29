import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      
      <First content="props"/>
    </div>
  );
}

function First({content}) {
  return (
    <div>
      <h2>First Component</h2>;
      <Second content={content}/>
    </div>
  );
}

function Second({content}) {
  return (
    <div>
      <h3>Second Component</h3>;
      <Third content={content}/>
    </div>);
}

function Third({content}) {
  return (
    <div>
      HELLO,Props!
      <h4>Third Component</h4>;
    </div>
  );
}


export default App;
