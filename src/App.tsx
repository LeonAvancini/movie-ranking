import React, { useState } from "react";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";

export default () => {
  //TODO: Create routing

  const [logged, setLogged] = useState(false);

  if (!logged) {
    return (
      <>
        <Login LogedIn={setLogged} />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    );
  }
};
