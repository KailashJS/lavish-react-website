import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjTwo } from "./Data";

function Services() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <Pricing />
    </>
  );
}

export default Services;