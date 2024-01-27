const defaultState = {
  value: 100,
  user: "Igor",
};

// action - действие, которое будет выполнено в store
// {type: 'INCREMENT' } - действие, объект, у которого обязательное поле type
// {type: 'DECREMENT' } - объект, у которого обязательное поле type
export const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + action.payload };
    case "DECREMENT":
      return { ...state, value: state.value - action.payload };
    default:
      return state;
  }
};

// action creator - функция, которая создает действие
export const increaseCounter = (payload) => ({ 
  type: "INCREMENT", 
  payload 
});

export const decreaseCounter = (payload) => ({
  type: "DECREMENT",
  payload,
});
