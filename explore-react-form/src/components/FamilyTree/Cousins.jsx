import React from "react";
import Special from "./Special";
import Friend from "./Friend";

const Cousins = ({ name, asset }) => {
  return (
    <div>
      <h3>{name}</h3>
      {name === "Baby" && <Special asset={asset}></Special>}
      {name === "Kakoli" && <Friend></Friend>}
    </div>
  );
};

export default Cousins;
