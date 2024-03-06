import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(sessionStorage.getItem('cart')) || [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload
      try { 
        const exist = state.cart.find(
          (product) =>
            product.id === productId.id
        )
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.newPrice;
          state.totalAmount++;
          state.totalPrice += productId.newPrice;
        } else {
          state.cart.push({
            id: productId.id,
            img:productId.img,
            name: productId.name,
            colors: productId.colors,
            newPrice: +productId.newPrice,
            amount: 1,
            totalPrice: +productId.newPrice
          })
        }
        state.totalAmount++;
        state.totalPrice += productId.newPrice
        const cartJson = JSON.stringify(state.cart)
        sessionStorage.setItem('cart', cartJson)
      }
      catch (err) { return err }
    },
    removeFromCart(state, action) {
      const productId = action.payload
      try {
        const exist = state.cart.find(
          (product) => 
            product.id === productId.id
        )
        if (exist.amount === 1) {
          state.cart = state.cart.filter(
            (product) =>
              product.id !== productId.id
          );
        state.totalAmount--;
        state.totalPrice -= productId.newPrice
      const cartJson = JSON.stringify(state.cart)
      sessionStorage.setItem('cart', cartJson)
      }
      else {
      exist.amount--;
      exist.totalPrice -= productId.newPrice
      state.totalAmount--;
      state.totalPrice -= productId.newPrice
      const cartJson = JSON.stringify(state.cart)
      sessionStorage.setItem('cart', cartJson)
    }
        
      } catch (err) {
        return err;
      }
    }
  }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { addToCart , removeFromCart  } = CartSlice.actions;
export default CartSlice.reducer;