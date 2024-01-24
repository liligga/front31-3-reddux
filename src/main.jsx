import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

import "./index.css";
import App from "./App";

const defaultState = {
  counter: 100,
  user: "Igor"
};

// action - действие, которое будет выполнено в store
// {type: 'INCREMENT' } - действие, объект, у которого обязательное поле type
// {type: 'DECREMENT' } - объект, у которого обязательное поле type
const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
