import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { fetchCategories } from "./store/category-slice";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import CategoryPage from "./pages/MealsByCategory";
import CartPage from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "category/:categoryName", element: <CategoryPage /> },
      { path: "cart", element: <CartPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  useEffect(() => {
    console.log("App.js redux state", state);
  }, [state]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
