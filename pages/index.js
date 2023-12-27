import Hero from "@/components/Layout/Hero";
import Pricing from "../components/Pricing/Pricing";
import React from "react";
import Header from "../components/Layout/Header";

//home page
function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      {/* <SongCardItem /> */}
      <Pricing />
    </React.Fragment>
  );
}

export default HomePage;
