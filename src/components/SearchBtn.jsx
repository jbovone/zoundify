import React from "react";
import Button from "./normalizers/button";
import MagnifyingGlass from "./svg/MagnifyingGlass";
import Cross from "./svg/Cross";

const SearchBtn = ({ variant, onClick, cssProps, isOpen }) => {
  return (
    <Button onClick={onClick} cssProps={cssProps}>
      {isOpen ? <MagnifyingGlass cssVariant={variant} /> : <Cross />}
    </Button>
  );
};

export default SearchBtn;
