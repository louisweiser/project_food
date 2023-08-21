import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMeals } from "./store/meals";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

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
  return <RouterProvider router={router} />;
}

export default App;
