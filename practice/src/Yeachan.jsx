import React, {Fragment, useState} from "react";


export default function Yeachan() {
  const [name,setName] = useState('');
 
  const onChange = (e) => {
    setName(e.target.value);

  }
  const viewname = () => {
    alert(name);
    setName('');
  }
  return (
    
    <Fragment>
  
      <h2>이름을 입력하세요</h2>
      <input onChange={onChange}/>
      <button onClick={viewname}>출력</button>
  
      
    
    </Fragment>
  );
}
