const defaultState = {
  items: [],
};

// {type: "ADD_TODO", payload: "Сходить в магазин"}
// {type: "REMOVE_TODO", payload: "Сходить в магазин"}
export const todosReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action);
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_TODO":
      return state;
    default:
      return state;
  }
};
