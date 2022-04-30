let initialState = { count: 0 };
const IncDec = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + parseInt(action.payload),
      };
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload,
      };
    case "multiply":
      return {
        ...state,
        count: state.count * parseInt(action.payload),
      };
    case "divide":
      return {
        ...state,
        count: state.count / parseInt(action.payload),
      };
    default:
      return state;
  }
};



export default IncDec;
