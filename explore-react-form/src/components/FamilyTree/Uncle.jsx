import React from "react";
import Cousins from "./Cousins";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle</h3>
      <section className="flex">
        <Cousins name="Rafsan"></Cousins>
        <Cousins name="Honey"></Cousins>
      </section>
    </div>
  );
};

export default Uncle;
