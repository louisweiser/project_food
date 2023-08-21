import { useParams } from "react-router-dom";

import MealsList from "../components/MealsList";

function CategoryPage() {
  const { categoryName } = useParams();

  return (
    <>
      <h1>{categoryName}</h1>
      <MealsList category={categoryName}></MealsList>
    </>
  );
}

export default CategoryPage;
