import { createStore } from "redux";
import homeReducer from "../Container/Home/reducer";

const store = createStore(homeReducer);


window.store = store;

export default store;
