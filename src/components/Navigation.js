import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const categories = useSelector(
    (state) => state.categories.categories.categories
  );

  if (!categories) {
    return;
  }

  const navigation = categories.map((item) => (
    <li key={item.idCategory}>
      <Link to={"/category/" + item.strCategory}>{item.strCategory}</Link>
    </li>
  ));

  return <ul className={classes.nav}>{navigation}</ul>;
}
