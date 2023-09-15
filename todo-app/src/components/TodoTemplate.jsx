import './TodoTemplate.scss'
import React, {useEffect} from "react";

export default function TodoTemplate({children}) {
  useEffect(() => {
    return () => {
      effect;
    };
  }, [input]);
  
    return (
        <div className={"TodoTemplate"}>
          <div className={"app-title"}>준호의 TodoList</div>
          <div className={"content"}>{children}</div>
        </div>
    );
}
