import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
import Header from "../components/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
