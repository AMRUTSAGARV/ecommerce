// For Add Item to CART
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
// For Delete Item to CART
export const delCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
