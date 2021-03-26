import React, { useState, useEffect, forwardRef } from "react";
import SliderViewer from "../SliderViewer";
import axios from "axios";
import Error404 from "../Error404";
import Section from "../normalizers/section";
import Loader from "../Loader";

const Home = forwardRef((_, ref) => {
  const [appData, setAppData] = useState(false);

  useEffect(() => {
    axios
      .get("/home")
      .then((res) => {
        setAppData(res.data);
      })
      .catch(() => {
        setAppData("error");
      });
  }, []);

  return (
    <Section ref={ref}>
      {appData === "error" ? (
        <Error404 />
      ) : !appData ? (
        <Loader />
      ) : (
        appData.map(({ title, articles }) => (
          <SliderViewer key={title} title={title} articles={articles} />
        ))
      )}
    </Section>
  );
});
export default Home;
