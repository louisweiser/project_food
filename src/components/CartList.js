import { useSelector } from "react-redux";

export default function CartList() {
  const cart = useSelector((state) => state.cart.items);

  if (!cart) {
    return;
  }

  const render = cart.map((item) => (
    <li key={item.id}>
      <h1>{item.name}</h1>
      <h2>Quantity: {item.quantity}</h2>
      <button>+</button>
      <button>-</button>
    </li>
  ));

  return <ul>{render}</ul>;
}
