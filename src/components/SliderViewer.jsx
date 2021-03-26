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
    width: "90%",
    margin: "auto",
    overflowX: "hidden",
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
      borderBottom: `1px solid ${palette.backgroundFooter}`,
    },
    ".viewer-container": {
      display: "flex",
      transform: `translateX(-${slide * 100 + displacement}%)`,
      transition: "ease-in-out 0.5s",
      marginBottom: 40,
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
    const totalSlides = Math.floor(articles.length / itemsPerSlide) - 1;
    const itemsImpairment = articles.length % itemsPerSlide;

    if (heading === "right" && slide < totalSlides) {
      console.log("SLIDE-RIGHT");
      setSlide(slide + 1);
      console.table({ totalSlides, itemsPerSlide, itemsImpairment });
    }
    if (
      heading === "right" &&
      slide === totalSlides &&
      itemsImpairment &&
      !displacement
    ) {
      console.log("displacement right");
      return setDisplacement((itemsImpairment / itemsPerSlide) * 100);
    }

    if (heading === "left" && slide !== 0 && !displacement) {
      setSlide(slide - 1);
    }
    if (
      heading === "left" &&
      slide === totalSlides &&
      itemsImpairment !== 0 &&
      displacement !== 0
    ) {
      return setDisplacement(0);
    }
  }

  return (
    <div className={style} ref={containerRef}>
      <header>
        <Highlighted size={sizes.h3}>{title}</Highlighted>
        <SliderPanel onClick={handleSlide} />
      </header>
      <section className="viewer-container">
        {articles.map((article) => (
          <Article key={article.id} ref={articleRef} {...article} />
        ))}
      </section>
    </div>
  );
};

export default SliderViewer;
