import {combineReducers} from 'redux';
import counter from "./counter";
// import todos from "../components/Todos";
import todos from "./todos"

const rootReducer = combineReducers({
  counter,
  todos,
});
export default rootReducer;