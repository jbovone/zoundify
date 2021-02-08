import React, { useState, useEffect } from "react";
import Footer from "./components/footer";
import Main from "./components/normalizers/main";
import FriendsAside from "./components/FriendsAside";
import AsideNavigator from "./components/AsideNavigator";
import Section from "./components/normalizers/section";
import Header from "./components/header/Header";
import Slider from "./components/Slider";
import axios from "axios";
import Error404 from "./components/Error404";
import { mockData } from "./mockData";

function App() {
  // const [appData, setAppData] = useState(false);
  /*
  useEffect(() => {
    axios
      .get("/browse")
      .then((res) => {
        console.log(res, "RES");
        setAppData(res.data);
      })
      .catch(() => {
        setAppData("error");
      });
  }, []);
  */

  console.log(mockData, "MOCKDATA");
  return (
    <Main>
      <AsideNavigator />
      <Section>
        <Header />
        {mockData === "error" ? (
          <Error404 />
        ) : !mockData ? (
          <span>loading</span>
        ) : (
          mockData.map(({ title, articles }) => (
            <Slider title={title} articles={articles} />
          ))
        )}
      </Section>
      <FriendsAside />
      <Footer />
    </Main>
  );
}

export default App;
