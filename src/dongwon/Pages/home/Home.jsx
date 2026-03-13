import React from "react";
import Hero from "./sections/hero/Hero";
import Journey from "./sections/journey/Journey";
import Answer from "./sections/answer/Answer";
import Business from "./sections/business/Business";


const Home = () => {
  return (
    <div>
      <Hero />
      <Journey />
      <Answer />
      <Business />
    </div>
  );
};

export default Home;
