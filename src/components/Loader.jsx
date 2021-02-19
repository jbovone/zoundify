import React, { useEffect, useState } from "react";
import { css } from "@emotion/css";
import Section from "./normalizers/section";

const style = css({
  width: 250,
  height: 250,
  margin: "auto",
  borderRadius: "50%",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transform: "scale(0.5)",

  "&>div": {
    borderRadius: "50%",
    background: "rgb(95, 95, 95)",
    width: 40,
    height: 40,
    position: "absolute",
  },
  "div:nth-child(1)": {
    top: 0,
  },
  "div:nth-child(2)": {
    top: 33.3,
    right: 33.3,
  },
  "div:nth-child(3)": {
    right: 0,
  },

  "div:nth-child(4)": {
    bottom: 33.3,
    right: 33.3,
  },
  "div:nth-child(5)": {
    bottom: 0,
  },
  "div:nth-child(6)": {
    bottom: 33.3,
    left: 33.3,
  },

  "div:nth-child(7)": {
    left: 0,
  },

  "div:nth-child(8)": {
    top: 33.3,
    left: 33.3,
  },
});

const initialState = [
  ...Array(5).fill("rgb(55, 55, 55)"),
  "rgb(120, 120, 120)",
  "rgb(180, 180, 180)",
  "rgb(255, 255, 255)",
];

const Loader = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setState((state) => [
        state[state.length - 1],
        ...state.slice(0, state.length - 1),
      ]);

      return () => window.clearTimeout(timeout);
    }, 180);
  }, [state]);

  return (
    <div className={style}>
      {state.map((_, i) => (
        <div
          style={{
            background: state[i],
          }}
        />
      ))}
    </div>
  );
};

export default Loader;
