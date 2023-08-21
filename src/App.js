import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMeals } from "./store/meals";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const meals = useSelector((state) => state.meals);

  useEffect(() => {
    console.log("Meals aus dem Zustand:", meals);
  }, [meals]);

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);
  console.log();
  return <div></div>;
}

export default App;
