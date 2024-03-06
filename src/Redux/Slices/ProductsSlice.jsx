import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_CARD } from "../../constans";

export const ProuctsSlice = createSlice({
  name: "Proucts",
  initialState: {
    filteredProducts: JSON.parse(sessionStorage.getItem("FilteredData")) || PRODUCTS_CARD ,
    singleProduct: JSON.parse(sessionStorage.getItem("SingleProduct"))  || PRODUCTS_CARD ,
  },
  reducers: {
    filterProducts(state, action) {
        const filter = PRODUCTS_CARD.filter(
          (product) => product.type === action.payload);
        state.filteredProducts = filter;
        console.log("filtered", filter);
        const SavedFiltered  = JSON.stringify(filter);
        sessionStorage.setItem("FilteredData", SavedFiltered);
    },
    singleProduct(state, action) {
        const single = PRODUCTS_CARD.filter(
          (product) => product.id === action.payload);
        state.singleProduct = single;
        console.log("Singl", single);
        const SavedSingle  = JSON.stringify(single);
        sessionStorage.setItem("SingleProduct", SavedSingle);
    }
  }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { filterProducts , singleProduct } = ProuctsSlice.actions;
export default ProuctsSlice.reducer;