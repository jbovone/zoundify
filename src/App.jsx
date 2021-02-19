import React, { useState } from "react";

import Footer from "./components/Footer";
import Main from "./components/normalizers/main";
import AsideFriends from "./components/AsideFriends";
import AsideNavigator from "./components/AsideNavigator";
import Navigation from "./components/Navigation";
import Home from "./components/views/Home";
import ShowMenuBtn from "./components/ShowMenuBtn";
import useResize from "./hooks/useResize";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [leftWidth, setLeftWidth] = useResize(240);
  const [rightWidth, setRightWidth] = useResize(240);

  return (
    <Main rAsideWidth={rightWidth} lAsideWidth={leftWidth}>
      <ShowMenuBtn setShowMenu={setShowMenu} />
      <Navigation />
      <AsideNavigator show={showMenu} setWidth={setLeftWidth} />
      <Home />
      <AsideFriends setWidth={setRightWidth} />
      <Footer />
    </Main>
  );
}

export default App;
