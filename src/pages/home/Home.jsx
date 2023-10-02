import React from "react";

import HeroBanner from "./heroBanner/HeroBanner";

import "./style.scss";

const Home = () => {
  return (
    <div className="homepage">
      <HeroBanner />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
