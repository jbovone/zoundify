import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer";
import Main from "./components/normalizers/main";
import FriendsAside from "./components/FriendsAside";
import AsideNavigator from "./components/AsideNavigator";
import Section from "./components/normalizers/section";
import Header from "./components/Header";
import SliderViewer from "./components/SliderViewer";
import axios from "axios";
import Error404 from "./components/Error404";
import { mockData } from "./mockData";
import Navigation from "./components/Navigation";

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
      <Navigation />
      <Section>
        <Header />
        {mockData === "error" ? (
          <Error404 />
        ) : !mockData ? (
          <span>loading</span>
        ) : (
          mockData.map(({ title, articles }) => (
            <SliderViewer title={title} articles={articles} />
          ))
        )}
      </Section>
      <Footer />
      <FriendsAside />
    </Main>
  );
}

export default App;
