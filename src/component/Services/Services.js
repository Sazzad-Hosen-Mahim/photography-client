import React, { useEffect, useState } from "react";
import "./Services.css";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="text-white sm:text-5xl text-2xl font-medium title-font mb-2">
                Services We Provide
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <h1 className="text-white">Service length: {services.length}</h1>
          <div class="grid gap-2 lg:grid-cols-2 md:grid-cols-1 ">
            {services.map((service) => (
              <ServiceCard
                key={service.service_id}
                service={service}
              ></ServiceCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
