export const increment = (payload) => {
  return {
      type: "increment",
      payload
  };
};

export const decrement = (payload) => {
  return {
      type: "decrement",
      payload
  };
};

export const multiply = (payload) => {
  return {
    type: "multiply",
    payload
  };
};
export const divide = (payload) => {
  return {
    type: "divide",
    payload
  };
};
