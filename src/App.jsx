import React, { useState } from "react";

import Footer from "./components/Footer";
import Main from "./components/normalizers/main";
import AsideFriends from "./components/AsideFriends";
import AsideNavigator from "./components/AsideNavigator";
import Navigation from "./components/Navigation";
import Home from "./components/views/Home";
import ShowMenuBtn from "./components/ShowMenuBtn";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <Main>
      <ShowMenuBtn setShowMenu={setShowMenu} />
      <Navigation />
      <AsideNavigator show={showMenu} />
      <Home />
      <AsideFriends />
      <Footer />
    </Main>
  );
}

export default App;
