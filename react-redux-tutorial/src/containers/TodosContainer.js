import {connect} from "react-redux";
import {changeInput, insert, toggle, remove} from "../modules/todos";
import input from "../modules/todos";
import todos from "../modules/todos";
import Todos from "../components/Todos";


const TodosContainer = ({
                          input,
                          todos,
                          changeInput,
                          insert,
                          toggle,
                          remove,
  
                        }) => {
  return (
    <Todos input={input}
           todos={todos}
           onChangeInput={changeInput}
           onInsert={insert}
           onToggle={toggle}
           onRemove={remove}/>
  );
};
export default connect(
  ({todos}) => ({ //비구조화 할당으로 todos를 분리해 state.todos.input 대신 todos.input 사용
    input: todos.input,
    todos: todos.todos,
  }),{
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer)