import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import Newsletter from "./Newsletter";
import Copyright from "./Copyright";
import Projects from "./Projects";
import InfoBox from "./InfoBox";

const Home = () => {
  return (
    <div className="bg-light">
      <InfoBox />
      <Header />
      <Copyright />
      <div className="row container mb-3">
        <div className="col-xl-8">
          <Section />
        </div>
        <div className="col-xl-4 mt-4">
          <Projects />
          <Newsletter />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
