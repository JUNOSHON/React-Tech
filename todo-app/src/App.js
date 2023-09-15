import logo from "./logo.svg";
import "./App.css";
import React, {useState} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "하체운동",
      cheked: true,
    },
    {
      id: 2,
      text: "리액트 공부",
      cheked: true,
    },
    {
      id: 3,
      text: "노드 과제",
      cheked: false,
    },
  
  ]);
  
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
  
  );
  
};



export default App;
