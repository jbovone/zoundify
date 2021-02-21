import React from "react";
import { css } from "@emotion/css";
import Button from "./normalizers/button";

const styles = {
  header: {
    circle: {
      stroke: "white",
    },
    "rect:nth-child(3)": {
      stroke: "white",
    },
    margin: "0.4rem",
  },
};

const Search = ({ variant, onClick }) => {
  return (
    <>
      {Boolean(onClick) ? (
        <Button onClick={onClick}>
          <svg
            className={css(variant && styles[variant])}
            width="20"
            height="20"
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Frame 6">
              <rect width="28" height="27" />
              <circle cx="10.5" cy="10.5" r="9" stroke="black" />
              <rect
                id="Rectangle 16"
                x="17.5706"
                y="16.2485"
                width="12.2742"
                height="0.90372"
                transform="rotate(42.97 17.5706 16.2485)"
                stroke="black"
                strokeWidth="0.90372"
              />
            </g>
          </svg>
        </Button>
      ) : (
        <svg
          className={css(variant && styles[variant])}
          width="20"
          height="20"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 6">
            <rect width="28" height="27" />
            <circle cx="10.5" cy="10.5" r="9" stroke="black" />
            <rect
              id="Rectangle 16"
              x="17.5706"
              y="16.2485"
              width="12.2742"
              height="0.90372"
              transform="rotate(42.97 17.5706 16.2485)"
              stroke="black"
              strokeWidth="0.90372"
            />
          </g>
        </svg>
      )}
    </>
  );
};

export default Search;
