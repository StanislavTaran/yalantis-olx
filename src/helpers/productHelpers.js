export const isAlreadyInCart = (id, cart) => cart.indexOf(id) > -1;

export const reducerForPrice = (acc, item) => acc + item.price * item.quantity;
