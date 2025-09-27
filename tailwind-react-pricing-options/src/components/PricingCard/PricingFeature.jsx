import { CircleCheckBig } from "lucide-react";
import React from "react";

const PricingFeature = ({ feature }) => {
  console.log(feature);

  return (
    <p className="flex mt-4">
      {" "}
      <CircleCheckBig className="mr-2"></CircleCheckBig>
      {feature}
    </p>
  );
};

export default PricingFeature;
