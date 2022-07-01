const initialState = {
  filter: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DAILY":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_WEEKLY":
      return {
        ...state,
        filter: action.payload,
      };
    case "SET_MONTHLY":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
