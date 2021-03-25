import React, { useState } from "react";

import Footer from "./components/Footer";
import Main from "./components/normalizers/main";
import AsideFriends from "./components/AsideFriends";
import AsideNavigator from "./components/AsideNavigator";
import Navigation from "./components/Navigation";
import Home from "./components/views/Home";
import MenuBtn from "./components/MenuBtn";
import WithMenu from "./components/withMenu";
import useVariableWidths from "./hooks/useVariableWidths";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [leftWidth, setLeftWidth] = useVariableWidths(240);
  const [rightWidth, setRightWidth] = useVariableWidths(240);

  return (
    <Main rAsideWidth={rightWidth} lAsideWidth={leftWidth}>
      <WithMenu MenuBtn={MenuBtn} setShowMenu={setShowMenu} open={showMenu} />
      <Navigation />
      <AsideNavigator show={showMenu} setWidth={setLeftWidth} />
      <Home />
      <AsideFriends setWidth={setRightWidth} />
      <Footer />
    </Main>
  );
}

export default App;
