import logo from "./logo.svg";
import "./App.css";
import {Fragment} from "react";
import SassComponent from "./sample/SassComponent";
import StyledComponent from "./sample/StyleComponent";
import styled, {ThemeProvider} from "styled-components";
import Button from "./components/Button";
import Box from './components/Box'
import {css,jsx} from '@emotion/react'

const divStyle = css`
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  padding: 32px;
  text-align: center;

  &:hover {
    color: white;
    font-size: 50px
  }

`



function App() {
  return (
    <div css={divStyle}>Hover to change Color</div>
  );
}


export default App;
