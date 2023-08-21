import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Definieren Sie die asynchrone Aktion zuerst
export const fetchMeals = createAsyncThunk("meals/fetchMeals", async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  ); // Fügen Sie "https://" zu Ihrer URL hinzu
  const data = await response.json();
  console.log("data", data);
  return data;
});

const initialState = {
  meals: [],
  status: "idle", // Für den Laden-Status
  error: null, // Für Fehlermeldungen
};

const mealSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.meals = action.payload;
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const mealActions = mealSlice.actions;
export default mealSlice.reducer;
