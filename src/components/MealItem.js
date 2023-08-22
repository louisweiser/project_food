import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart-slice";

export default function MealItem(props) {
  const dispatch = useDispatch();

  if (!props) {
    return;
  }

  const { meal, id } = props;

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, meal }));
  };

  return (
    <>
      <h3>{meal}</h3>
      <button onClick={addItemHandler}>Add to Cart</button>
    </>
  );
}
