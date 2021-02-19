import { css } from "@emotion/css";
import React from "react";
import HighLight from "./normalizers/typography/highlighted";
import Play from "./svg/Play";
import { sizes } from "../theme/sizing";
import Heart from "./svg/Heart";
import Text from "./normalizers/typography/text";
import Lead from "./normalizers/typography/lead";

const Article = React.forwardRef(
  ({ name, image, description, followers }, ref) => {
    const style = css({
      minWidth: "33.4%",
      img: {
        width: "90%",
      },
      ":hover": {
        div: {
          opacity: 1,
          height: "100%",
        },
      },
      figure: {
        position: "relative",
        zIndex: 1000,
      },
      div: {
        "&>*": {
          cursor: "pointer",
        },
        position: "absolute",
        bottom: 0,
        width: "90%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "rgb(0,0,0, 0.7)",
        opacity: 0,
        transition: "ease-in-out 0.2s",
      },
      p: {
        width: "90%",
      },
      "@media (max-width: 600px)": {
        minWidth: "50%",
      },
      "@media (min-width: 1600px)": {
        minWidth: "16.7%",
      },
    });
    return (
      <article className={style} ref={ref}>
        <figure>
          <img src={image} alt="list item" />
          <div>
            <Heart />
            <Play height={50} width={49} />
            <HighLight size={sizes.h2}>...</HighLight>
          </div>
        </figure>
        <HighLight>{name}</HighLight>
        {Boolean(description) && <Text caption>{description}</Text>}
        {Boolean(followers) && <Lead>{followers} FOLLOWERS</Lead>}
      </article>
    );
  }
);

export default Article;
