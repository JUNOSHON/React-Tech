import React from "react";
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {

    border-radius: 100px;
  }
  100% {
    transform: rotate(350deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: bisque;
  animation: ${rotate} 2s linear infinite;
  margin:0 auto;
  

  span {
    font-size: 20px;

    &:hover {
      font-size: 40px;
    }
  }
`;
export default Box;

