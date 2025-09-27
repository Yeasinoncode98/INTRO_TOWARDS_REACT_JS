import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { name, price, description, features } = pricing;
  return (
    <div className="border bg-amber-600 rounded-2xl p-2">
      {/* Card Header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h3 className="text-3xl">{price}</h3>
      </div>
      {/* Card Body */}
      <div className="bg-amber-300 p-2 rounded-2xl mt-10">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>

      <button className="btn w-full mt-5 bg-red-200 text-green-400">
        Subsribe
      </button>
    </div>
  );
};

export default PricingCard;
