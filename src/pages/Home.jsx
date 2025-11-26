import React, { useEffect, useState } from "react";
import AboutMe from "./AboutMe.jsx";
import Skill from "./Skill.jsx";
import Contactus from "./Contactus.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Discription from "./Discription.jsx";
import Portfolio from "./Portfolio.jsx";
import Loader from "../components/Loader.jsx";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="w-full h-auto">
            <HeroSection />
          </section>
          <section className="w-full h-auto">
            <Discription />
          </section>
          <section className="w-full h-auto">
            <AboutMe />
          </section>
          <section className="w-full h-auto">
            <Skill />
          </section>
          <section>
            <Portfolio />
          </section>
          <section className="w-full h-auto">
            <Contactus />
          </section>
        </>
      )}
    </>
  );
};

export default Home;
