import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export default function Header() {
  const state = useSelector((state) => state.cart);
  console.log("cart", state);
  return (
    <div>
      <h1>Food Order App</h1>
      <Link to="cart">Cart </Link>
      <h1>{state.totalQuantity}</h1>
    </div>
  );
}
