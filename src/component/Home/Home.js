import React from "react";
import Head from "../Head/Head";
import Services from "../Services/Services";
import Display from "../Display/Display";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Head></Head>
      <Services></Services>
      <Display></Display>
      <Pricing></Pricing>
      <Team></Team>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
