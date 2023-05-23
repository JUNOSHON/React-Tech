import {combineReducers} from 'redux';
import counter from "./counter";
import todos from "../components/Todos";

const rootReducer = combineReducers({
  counter,
  todos,
});
export default rootReducer;