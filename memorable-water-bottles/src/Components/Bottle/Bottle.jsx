import React from "react";
import "./bottle.css";
const Bottle = ({ bottle, handleAddTocart }) => {
//   console.log(bottle);
  //   const { img } = bottle;
  return (
    <div className="card bottle">
      <img src={bottle.img} alt={bottle.img} />
      <h3>{bottle.name}</h3>
      <p>${bottle.price}</p>
      <p>{bottle.seller}</p>
      <p>Available In Stock : {bottle.stock} </p>
      <button onClick={() => handleAddTocart(bottle)}>Buy Now</button>
    </div>
  );
};

export default Bottle;
