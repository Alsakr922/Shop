/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS_CARD } from "../../constants/__PRODUCTS";

export const ProuctsSlice = createSlice({
  name: "Proucts",
  initialState: {
    filteredProducts:
      JSON.parse(localStorage.getItem("FilteredData")) || PRODUCTS_CARD,
    singleProduct:
      JSON.parse(localStorage.getItem("SingleProduct")) || PRODUCTS_CARD,
  },
  error: false,
  reducers: {
    filterProducts(state, action) {
      const filter = PRODUCTS_CARD.filter(
        (product) => product.type === action.payload
      );
      state.filteredProducts = filter;
      const SavedFiltered = JSON.stringify(filter);
      localStorage.setItem("FilteredData", SavedFiltered);
      console.log(state.filteredProducts);
    },
    singleProduct(state, action) {
      const single = PRODUCTS_CARD.filter(
        (product) => product.id === action.payload
      );
      state.singleProduct = single;
      const SavedSingle = JSON.stringify(single);
      localStorage.setItem("SingleProduct", SavedSingle);
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { filterProducts, singleProduct } =
  ProuctsSlice.actions;
export default ProuctsSlice.reducer;
