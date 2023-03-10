import React, {useReducer, useState} from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {value: state.value + 1};
    case "DECREMENT" :
      return {value: state.value - 1};
    default:
      return state;
  }
}

export default function ReducerCounter() {
  
  const [state, dispatch] = useReducer(reducer, {value: 0});
  
  
  return (
    <>
      <p>현재 카운터는 <strong>{state.value} 입니다.</strong></p>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-</button>
    </>
  );
}
