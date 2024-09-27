import React from "react";
import { mascot } from "../assets";

const Image = () => {
  return (
    <div>
      <div className="sticky top-0">
        <img
          src={mascot}
          className="w-full h-full object-fill "
          width={1440}
          height={1800}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Image;
