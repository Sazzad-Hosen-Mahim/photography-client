import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const ServiceCard = ({ service }) => {
  return (
    <div>
      <div class="xl:w-1/2 md:w-1/2 p-4">
        <div class=" p-6 rounded-lg service-content">
          <PhotoProvider>
            <PhotoView src={service.img}>
              <img
                class="h-40 rounded w-full object-cover object-center mb-6"
                src={service.img}
                alt="content"
              />
            </PhotoView>
          </PhotoProvider>

          <h2 class="text-xl font-bold text-black title-font mb-4">
            {service.title}
          </h2>
          <p class="text-white leading-relaxed text-base">
            {service.description}
          </p>
          <button className="btn mt-5 service-btn">
            Details <AiOutlineArrowRight></AiOutlineArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
