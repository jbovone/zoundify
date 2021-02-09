import React, { useState, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import Highlighted from "./normalizers/typography/highlighted";
import { sizes } from "../theme/sizing";
import Article from "./Article";
import { palette } from "../theme/colors";
import SliderPanel from "./SliderPanel";

const SliderViewer = ({ title, articles }) => {
  const articleRef = useRef();
  const containerRef = useRef();

  const [slide, setSlide] = useState(0);
  const [displacement, setDisplacement] = useState(0);

  const style = css({
    overflowX: "hidden",
    width: "90%",
    margin: "auto",
    paddingBottom: 20,
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      borderBottom: `1px solid ${palette.backgroundFooter}`,
    },
    section: {
      display: "flex",
      transform: `translateX(-${slide * 100 + displacement}%)`,
      transition: "ease-in-out 0.5s",
    },
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSlide(0);
      setDisplacement(0);
    });
    return () =>
      window.removeEventListener("resize", () => {
        setSlide(0);
        setDisplacement(0);
      });
  }, []);

  function handleSlide(heading) {
    console.log(heading, "HEADING");
    const { getComputedStyle } = window;
    const articleWidth = getComputedStyle(articleRef.current).width.replace(
      "px",
      ""
    );
    const containerWidth = getComputedStyle(containerRef.current).width.replace(
      "px",
      ""
    );
    const itemsPerSlide = Math.round(containerWidth / articleWidth);
    const totalSlides = Math.ceil(articles.length / itemsPerSlide) - 1;
    const itemsImpairment = articles.length % itemsPerSlide;

    if (heading === "right" && slide !== totalSlides) {
      if (slide === totalSlides - 1 && itemsImpairment !== 0) {
        return setDisplacement((itemsImpairment / itemsPerSlide) * 100);
      }
      setSlide(slide + 1);
    }

    if (heading === "left" && slide !== 0) {
      if (
        slide === totalSlides - 1 &&
        itemsImpairment !== 0 &&
        displacement !== 0
      ) {
        return setDisplacement(0);
      }
      setSlide(slide - 1);
    }
  }

  return (
    <section className={style} ref={containerRef}>
      <header>
        <Highlighted size={sizes.h2}>{title}</Highlighted>
        <SliderPanel onClick={handleSlide} />
      </header>
      <section>
        {articles.map((article) => (
          <Article ref={articleRef} {...article} />
        ))}
      </section>
    </section>
  );
};

export default SliderViewer;
