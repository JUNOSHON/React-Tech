import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./components/countSlice";

export const store= configureStore({
  reducer: counterSlice,
  middleware:[...middlwares]
});