import React from "react";

export default function MealItem(props) {
  if (!props) {
    return;
  }
  const { meal, onAddToCart } = props;

  const mealName = props.mealName;

  return (
    <>
      <h3>{meal.name}</h3>
      <button onClick={() => onAddToCart(mealName)}>Add to Cart</button>
    </>
  );
}
