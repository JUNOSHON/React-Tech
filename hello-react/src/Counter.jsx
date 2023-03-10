import React, {useState} from "react";

export default function Counter() {
  
  const [count, setCount] = useState(0);
  
  
  return (
    <>
      <h2>현재 카운터의 값은 {count} 입니다.</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    
    </>
  );
}
