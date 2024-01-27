const defaultState = {
  user: "",
};

// {
//   type: "CHANGE_NAME";
//   payload: "Igor";
// }
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// action creators
export const changeUserName = (payload) => ({
  type: "CHANGE_NAME",
  payload
});
