import React, { useState } from "react";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./pages/Login";
import { SearchProvider } from "./contexts/SearchContext";

export default () => {
  //TODO: Create routing

  const [logged, setLogged] = useState(true);

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
        <SearchProvider>
          <Header />
          <Menu />
        </SearchProvider>
        <Footer />
      </>
    );
  }
};
