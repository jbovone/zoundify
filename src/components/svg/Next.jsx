import React from "react";
import { css } from "@emotion/css";

const Next = ({ invertHeading }) => {
  const style = css({
    transform: invertHeading && "rotate(-180deg);",
    ":hover": {
      ".fill": {
        fill: "white",
      },
    },
  });
  return (
    <svg
      className={style}
      width="25"
      height="25"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="35" height="35" />
      <path
        className="fill"
        d="M23.6604 9.5H26V25H23.6604V9.5Z"
        fill="#B5B5B5"
      />
      <path
        className="fill"
        d="M25.6604 17.1254L6 28V7L25.6604 17.1254Z"
        fill="#B5B5B5"
      />
    </svg>
  );
};

export default Next;
