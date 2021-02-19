import React, { useState, useEffect } from "react";
import SliderViewer from "../SliderViewer";
import axios from "axios";
import Error404 from "../Error404";
import { mockData } from "../../mockData";
import { css } from "@emotion/css";
import Header from "../Header";
import { palette } from "../../theme/colors";

const style = css({
  width: "100%",
  gridArea: "viw",
  overflowY: "scroll",
  "@media(max-width:1100px)": {
    gridColumn: "1 / span 3",
  },
  "::-webkit-scrollbar": {
    width: "17px",
    height: "11px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#373737",
  },
  "::-webkit-scrollbar-track": {
    background: palette.backgroundBody,
  },
  "::-webkit-scrollbar-button": {
    width: 30,
    height: 30,
    color: "white",
  },
});

const Home = () => {
  const [appData, setAppData] = useState(false);
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

  return (
    <div className={style}>
      <Header />
      {mockData === "error" ? (
        <Error404 />
      ) : !appData ? (
        <span>loading</span>
      ) : (
        appData.map(({ title, articles }) => (
          <SliderViewer title={title} articles={articles} />
        ))
      )}
    </div>
  );
};

export default Home;
