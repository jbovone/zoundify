import React from "react";
import Footer from "./components/footer";
import Main from "./components/normalizers/main";
import FriendsAside from "./components/FriendsAside";
import AsideNavigator from "./components/AsideNavigator";
import Section from "./components/normalizers/section";
import Header from "./components/header/Header";

function App() {
  return (
    <Main>
      <AsideNavigator />
      <Section>
        <Header />
      </Section>
      <FriendsAside />
      <Footer />
    </Main>
  );
}

export default App;
