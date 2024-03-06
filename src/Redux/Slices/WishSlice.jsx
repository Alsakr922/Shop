import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const WishSlice = createSlice({
  name: "wish",
  initialState: {
    wish: JSON.parse(sessionStorage.getItem('wish')) || [],
    totalAmount: 0,
  },
  reducers: {
    addToWish(state, action) {
      const productId = action.payload
      try { 
        const exist = state.wish.find(
          (product) =>
            product.id === productId.id
        )
        if (exist) {
          console.log("inWish");
        } else {
          state.wish.push({
            id: productId.id,
            img:productId.img,
            name: productId.name,
            colors: productId.colors,
            type: productId.type,
          })
          state.totalAmount++;
        }
                    Swal.fire({
      title: "Added!",
      text: "Your Product has been Added.",
      icon: "success"
    });
        const wishJson = JSON.stringify(state.wish)
        sessionStorage.setItem('wish', wishJson)
      }
      catch (err) { return err }
    },
        removeFromWish(state, action) {
      const productId = action.payload
      try {
        const exist = state.wish.find(
          (product) => 
            product.id === productId.id 
        )
        if (exist) {
          state.wish = state.wish.filter(
            (product) =>
              product.id !== productId.id 
            
          );
      Swal.fire({
      title: "Deleted!",
      text: "Your Product has been Deleted.",
      icon: "error"
    });
          state.totalAmount--;
          const wishJson = JSON.stringify(state.wish)
          sessionStorage.setItem('wish', wishJson)
      }
        else {
          console.log('Dont save wish ');
            }
      } catch (err) {
        return err;
      }
    }
  }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { addToWish , removeFromWish  } = WishSlice.actions;
export default WishSlice.reducer;