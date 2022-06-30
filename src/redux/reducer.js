const initialState = {
  filter: [],
  backUp: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_DAYS":
      return {
        ...state,
        backUp: action.payload,
        filter: action.payload,
      }; //retorno la copia del estado y paso el action.

    default:
      return state;
  }
}

export default rootReducer;
