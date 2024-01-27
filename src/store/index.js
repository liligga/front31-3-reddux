import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { counterReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
import { todosReducer } from "./todosReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    todos: todosReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
