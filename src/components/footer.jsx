import React from "react";
import { css } from "@emotion/css";
import { flex } from "../helpers";
import { footer } from "./svg/customs";
import Box from "./normalizers/box";
import Slider from "./SliderControl";
import HighLight from "./normalizers/typography/highlighted";
import { sizes } from "../theme/sizing";
import Text from "./normalizers/typography/text";

const style = css({
  ...flex("space-between", "center"),
  gridArea: "foo",
  ".panel": {
    ...flex(),
    "&>*": {
      cursor: "pointer",
      margin: ".3rem .5rem",
    },
    img: {
      maxHeight: "50px",
    },
  },
  ".left-panel": {
    div: {
      verticalAlign: "middle",
      padding: 3,
      "&>p": {
        margin: ".3rem 0",
      },
      "span:hover": {
        textDecoration: "underline",
      },

      "&>svg": {
        transform: "translateY(2px) translateX(7px)",
        marginleft: "2rem",
      },
    },
  },
  ".center-panel": {
    width: "50%",
    flexWrap: "wrap",
    marginBottom: 7,
  },
  ".right-panel": {
    ">*": {
      marginLeft: "1rem",
    },
  },
  "@media(min-width: 400px)": {
    justifyContent: "space-evenly",
    ".panel": {
      flex: "unset",
    },
  },
  "@media(max-width: 640px)": {
    flexWrap: "wrap",
    justifyContent: "space-between",
    ".panel img": {
      maxHeight: "30px",
    },
    ".center-panel": {
      width: "100%",
      maxWidth: 900,
      order: 1,
    },
    ".left-panel, .right-panel": {
      order: 2,
    },
  },
  "@media(min-width: 1200px)": {
    justifyContent: "space-between",
    ".right-panel": {
      marginRight: 20,
      "&>*": {
        marginLeft: "2rem",
      },
    },
  },
});
const Footer = () => {
  const { Devices, Skip15, Queque, Volume, Next, Play, Heart } = footer;
  return (
    <Box className={style}>
      <section className="panel left-panel">
        <img
          src="https://i.scdn.co/image/ab67706f00000003a8f6984bc0b9ffe3272bb614"
          alt=""
        />
        <div>
          <HighLight size={sizes.cap}>Top Hits</HighLight>
          <Heart height="13" />
          <Text caption>Various Artists</Text>
        </div>
      </section>
      <section className="panel center-panel">
        <Skip15 invertHeading />
        <Next invertHeading />
        <Play />
        <Next />
        <Skip15 />
        <Slider width="40vw" />
      </section>
      <section className="panel right-panel">
        <Queque />
        <Devices />
        <Volume />
        <Slider width="80px" />
      </section>
    </Box>
  );
};

export default Footer;
