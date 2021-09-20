import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjThree } from "./Data";

function Products() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <Pricing />
    </>
  );
}

export default Products;