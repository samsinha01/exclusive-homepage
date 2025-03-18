import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../static/products.json"; // Load static data

const initialState = {
  salesProduct: productsData[0].salesProduct || [],
  category: productsData[0].category || [],
  monthProduct: productsData[0].monthProduct || [],
  ourProduct: productsData[0].ourProduct || [],
  newArrival: productsData[0].newArrival || [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
