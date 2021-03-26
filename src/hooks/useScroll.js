import { useState, useEffect, useRef } from "react";

const useScroll = () => {
  const [scrollValue, setScrollValue] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    function handleScroll(e) {
      setScrollValue(e.srcElement.scrollTop);
    }
    el.addEventListener("scroll", handleScroll);
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [scrollValue, ref];
};

export default useScroll;
