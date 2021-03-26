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
import Header from "./components/Header";
import useScroll from "./hooks/useScroll";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [leftWidth, setLeftWidth] = useVariableWidths(240);
  const [rightWidth, setRightWidth] = useVariableWidths(240);
  const [scrollData, ref] = useScroll();

  return (
    <Main rAsideWidth={rightWidth} lAsideWidth={leftWidth}>
      <WithMenu MenuBtn={MenuBtn} setShowMenu={setShowMenu} open={showMenu} />
      <Navigation />
      <Header scrollValue={scrollData} />
      <AsideNavigator show={showMenu} setWidth={setLeftWidth} />
      <Home ref={ref} />
      <AsideFriends setWidth={setRightWidth} />
      <Footer />
    </Main>
  );
}

export default App;
