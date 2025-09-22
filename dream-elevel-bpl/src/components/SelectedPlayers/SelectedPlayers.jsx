import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {
  // console.log(purchasedPlayers);

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* <div className="border-2 border-gray-300 p-4 flex justify-between items-center rounded-xl mt-5 ">
        <div className="flex items-center ">
          <img
            src="https://i.ibb.co.com/Vby3J7C/OIP.webp"
            className="w-[50px] h-[50px]  rounded-xl"
            alt=""
          />
          <div className="ml-4">
            <h1>Sakib Al Hasan</h1>
            <p className="text-xs">Left Hand Batsman</p>
          </div>
        </div>

        <div>
          <img src="https://i.ibb.co.com/Pv41KzPg/Frame.png" alt="" />
        </div>
      </div> */}
      {/* <SelectedCard></SelectedCard> */}
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
