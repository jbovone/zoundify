import React, { useState, useEffect } from "react";
import SliderViewer from "../SliderViewer";
import axios from "axios";
import Error404 from "../Error404";

import Header from "../Header";
import Section from "../normalizers/section";
import Loader from "../Loader";

const Home = () => {
  const [appData, setAppData] = useState(false);
  useEffect(() => {
    axios
      .get("/browse")
      .then((res) => {
        setAppData(res.data);
      })
      .catch(() => {
        setAppData("error");
      });
  }, []);

  return (
    <Section>
      <Header />
      {appData === "error" ? (
        <Error404 />
      ) : !appData ? (
        <Loader />
      ) : (
        appData.map(({ title, articles }) => (
          <SliderViewer title={title} articles={articles} />
        ))
      )}
    </Section>
  );
};

export default Home;
