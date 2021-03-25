import { useState } from "react";

const useVariableWidths = (initialWidth) => {
  const [width, setWidth] = useState(initialWidth);

  function handleWidth(nextWidth) {
    if (nextWidth > initialWidth * 1.4) return;
    if (nextWidth < initialWidth * 0.6) return;
    setWidth(() => nextWidth);
    return width;
  }

  return [width, handleWidth];
};

export default useVariableWidths;
