export const addToCart = (product, quantity, varient) => (dispatch, getState) => {
    var cartItem = {
        name: product.name,
        _id: product._id,
        image: product.imageUrl,
        // image: product.image,
        varient: varient,
        quantity: Number(quantity),
        prices: product.prices,
        price: product.prices[0][varient] * quantity,
}
if (cartItem.quantity > 10) {
    alert("you Can only add 10 products");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: product });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }}}

    export const deleteFromCart = (pizza) => (dispatch, getState) => {
        dispatch({ type: "DELETE_FROM_CART", payload: pizza });
        const cartItems = getState().cartReducer.cartitems;
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      };