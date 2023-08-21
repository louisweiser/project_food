import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./category-slice";
import mealsByCategoryReducer from "./mealsByCategory-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    mealsByCategory: mealsByCategoryReducer,
    cart: cartSlice,
  },
});

export default store;
