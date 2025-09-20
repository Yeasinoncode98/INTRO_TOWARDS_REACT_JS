import React from "react";
import { use } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import { useState } from "react";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);

  const [cart, setCart] = useState([]);

  const handleAddTocart = (bottle) => {
    // console.log("bottle will be added", bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };

  //   console.log(bottles);
  return (
    <div>
      <h3>Bottles : {bottles.length}</h3>
      <h3>Added to cart: {cart.length} </h3>
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddTocart={handleAddTocart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
