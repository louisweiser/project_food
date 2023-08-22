import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./category-slice";
import mealsByCategoryReducer from "./mealsByCategory-slice";
import cartSliceReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    mealsByCategory: mealsByCategoryReducer,
    cart: cartSliceReducer,
  },
});

export default store;
