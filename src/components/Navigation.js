import { useSelector } from "react-redux";

import classes from "./Navigation.module.css";

export default function Navigation() {
  const categories = useSelector((state) => state.data.categories);

  const navigation = categories.map((item) => (
    <li key={item.idCategory}>{item.strCategory}</li>
  ));
  console.log(categories);

  return <ul className={classes.nav}>{navigation}</ul>;
}
