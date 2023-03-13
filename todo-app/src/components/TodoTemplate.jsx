import './TodoTemplate.scss'
import React from 'react';

export default function TodoTemplate({children}) {
    return (
        <div className={"TodoTemplate"}>
          <div className={"app-title"}>준호의 TodoList</div>
          <div className={"content"}>{children}</div>
        </div>
    );
}
