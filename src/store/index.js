import { configureStore } from "@reduxjs/toolkit";

import mealReducer from "./meals";

const store = configureStore({ reducer: mealReducer });

export default store;
