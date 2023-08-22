import { useSelector, useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";

export default function CartList() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const addItemHandler = (item) => {
    const id = item.id;
    const meal = item.name;
    dispatch(cartActions.addItemToCart({ id, meal }));
  };

  const removeItemHandler = (item) => {
    const id = item.id;
    const meal = item.name;
    dispatch(cartActions.removeItemFromCart({ id, meal }));
  };

  if (!cart) {
    return;
  }

  const render = cart.map((item) => (
    <li key={item.id}>
      <h1>{item.name}</h1>
      <h2>Quantity: {item.quantity}</h2>
      <button
        onClick={() => {
          addItemHandler(item);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          removeItemHandler(item);
        }}
      >
        -
      </button>
    </li>
  ));

  return <ul>{render}</ul>;
}
