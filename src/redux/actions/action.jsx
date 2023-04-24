export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// remove item
export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

//remove item

export const REMOVE = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
