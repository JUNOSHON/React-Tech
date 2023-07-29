import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Home() {
  const ButtonBox = styled.div`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    justify-content: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100px;
    height: 50px;
    text-decoration-line: none;
    
    
    align-items: center;
    background: #228be6;
    &:hover{
      background: #339af0;
    }
    &+&{
      margin-left: 1rem;
    }
    &:active{
      background: #1c7ed6;
    }
  `
  
  const BigBox = styled.div`
    display: flex;
    flex-direction: column;
  `
  return (
    <div>
      <h1>Wisoft</h1>
      <h4>HBNU Wireless Communication Software Laboratory</h4>
      
      <BigBox>
       <Link style={{ textDecoration: "none" }} to={'/profiles/professor'}><ButtonBox>교수님 소개</ButtonBox></Link><br/>
      <Link style={{ textDecoration: "none" }} to={'/profiles/doctor'}><ButtonBox>박사님 소개</ButtonBox></Link><br/>
      <Link style={{ textDecoration: "none" }} to={'/profiles/void'}><ButtonBox>석사님 소개</ButtonBox></Link><br/>
      </BigBox>
      
    </div>
  );
}
