import React, {Fragment, useEffect, useState} from "react";

export default function Info() {
  const [name, setName] = useState("");
  const [nickName, setNickname] = useState("");
  
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  
  }, [name]);
  
  const onChangeName = e => {
    setName(e.target.value);
  };
  
  const onChangeNickName = e => {
    setNickname(e.target.value);
  };
  
  
  return (
    <Fragment>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickName} onChange={onChangeNickName}/>
      </div>
      <div>
        <b>이름 :</b> {name}
      </div>
      <div>
        <b>닉네임 : </b>{nickName}
      </div>
    
    </Fragment>
  );
}
