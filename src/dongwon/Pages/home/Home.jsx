import React from "react";
import Hero from "./sections/hero/Hero";
import Journey from "./sections/journey/Journey";
import Answer from "./sections/answer/Answer";
import Business from "./sections/business/Business";
import Media from "./sections/media/Media";


const Home = () => {
  return (
    <div>
      <Hero />
      <Journey />
      <Answer />
      <Business />
      <Media/>
    </div>
  );
};

export default Home;
