const myReducer = (state = "Dummy", action) => {
    if (action.type === "Input") {
      state = action.payload;
    }
    return state;
  };
  
  export default myReducer;