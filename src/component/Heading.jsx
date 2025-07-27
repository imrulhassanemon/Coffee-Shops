import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center flex flex-col pt-8">
      {/* Heading */}
      <h1 className="lg:text-5xl text-2xl font-bold">{title}</h1>
      <p className="lg:text-2xl text-lg mt-3 font-medium text-gray-600">{subtitle}</p>
    </div>
  );
};

export default Heading;
