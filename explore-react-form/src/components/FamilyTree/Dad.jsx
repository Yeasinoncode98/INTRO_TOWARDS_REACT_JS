import React from "react";
import MySelf from "./MySelf";
import Borther from "./Borther";
import Sister from "./Sister";

const Dad = ({ asset }) => {
  return (
    <div>
      <h3>Dad</h3>
      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Borther></Borther>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
