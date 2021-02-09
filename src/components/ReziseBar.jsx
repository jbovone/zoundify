import { css } from "@emotion/css";
import React, { Fragment, useRef } from "react";

const ReziseBar = ({ setWidth, right, left }) => {
  const viewWidth = document.querySelector(":root").clientWidth;
  const ref = useRef();
  const style = css({
    cursor: "col-resize",
    position: "absolute",
    height: "100%",
    width: "10px !important",
    right: right && "0px !important",
    left: left && "0px !important",
    top: "0px",
    img: {
      position: "absolute",
      opacity: "0",
    },
  });

  return (
    <Fragment>
      <div
        className={style}
        left
        draggable={true}
        onDragStart={({ dataTransfer }) => {
          dataTransfer.setDragImage(ref.current, 0, 0);
        }}
        onDrag={({ pageX }) => setWidth(left ? viewWidth - pageX : pageX)}
        onDragEnd={({ pageX }) => setWidth(left ? viewWidth - pageX : pageX)}
      />
      <img src="" ref={ref} alt="" />
    </Fragment>
  );
};

export default ReziseBar;
