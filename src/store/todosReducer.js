import axios from "axios";

const defaultState = {
  items: [],
};

// {type: "ADD_TODO", payload: "Сходить в магазин"}
// {type: "REMOVE_TODO", payload: "Сходить в магазин"}
export const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_TODOS_SUCCESS":
        return {
            ...state,
            items: action.payload
        }
    case "ADD_TODO":
      console.log(action);
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_TODO":
      console.log(action);
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

// action creators
export const addTodo = (payload) => ({
    type: "ADD_TODO",
    payload
})

export const removeTodo = (payload) => ({
    type: "REMOVE_TODO",
    payload
})

// thunk - функция, которая возвращает другую функцию
// middleware - промежуточное ПО
// dispatch(fetchTodos())
export const fetchTodos = () => {
    return async (dispatch) => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch({type: "FETCH_TODOS_SUCCESS", payload: response.data})
    }
}