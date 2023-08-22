import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMealsByCategory } from "../store/mealsByCategory-slice";

import MealItem from "./MealItem";

export default function MealsList(props) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  const category = props.category;
  useEffect(() => {
    dispatch(fetchMealsByCategory(category));
  }, [dispatch, category]);

  const mealList = state.mealsByCategory.mealsByCategory[category];

  if (!mealList) {
    return;
  }

  const render = mealList.map((meal) => (
    <li key={meal.idMeal}>
      <MealItem meal={meal.strMeal} id={meal.idMeal}></MealItem>
    </li>
  ));

  if (!render) {
    return;
  }
  return <ul>{render}</ul>;
}
