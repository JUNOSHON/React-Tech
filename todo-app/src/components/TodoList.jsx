import TodoListItem from "./TodoListItem";
import './TodoList.scss';

import React from 'react';

export default function TodoList() {
    return (
        <div className="TodoList">
          <TodoListItem/>
          <TodoListItem/>
          <TodoListItem/>
        </div>
    );
};
