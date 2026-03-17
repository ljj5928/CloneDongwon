import React, { useState } from "react";
import Hero from "./sections/hero/Hero";
import Journey from "./sections/journey/Journey";
import Answer from "./sections/answer/Answer";
import Business from "./sections/business/Business";
import Media from "./sections/media/Media";

const Home = () => {
  const [journeyActive, setJourneyActive] = useState(false);
  return (
    <div>
      <Hero />
      <section className={journeyActive ? "" : "header-light-section"}>
        <Journey setJourneyActive={setJourneyActive} />
      </section>
      <Answer />
      <section className="header-light-section">
        <Business />
      </section>
      <section className="header-light-section">
        <Media />
      </section>
    </div>
  );
};

export default Home;
