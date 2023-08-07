import React from "react";
import Head from "../Head/Head";
import Services from "../Services/Services";
import Display from "../Display/Display";
import Pricing from "../Pricing/Pricing";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Head></Head>
      <Services></Services>
      {/* see all services button  */}
      <Link to="/service">
        <button className="btn all-service-btn flex mt-10 mx-auto ">
          See all Services
        </button>
      </Link>
      {/* see all service button ends here  */}
      <Display></Display>
      <Pricing></Pricing>
      <Team></Team>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
