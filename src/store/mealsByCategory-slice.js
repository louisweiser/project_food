import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMealsByCategory = createAsyncThunk(
  "meals/fetchByCategory",
  async (category) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    return { category, meals: data.meals };
  }
);

const initialState = {
  mealsByCategory: {},
  status: "idle",
  error: null,
};

const mealsByCategorySlice = createSlice({
  name: "mealsByCategory",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealsByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMealsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mealsByCategory[action.payload.category] = action.payload.meals;
      })
      .addCase(fetchMealsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const mealsByCategoryActions = mealsByCategorySlice.actions;

export default mealsByCategorySlice.reducer;
