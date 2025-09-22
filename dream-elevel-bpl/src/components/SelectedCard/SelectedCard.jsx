import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div className="border-2 border-gray-300 p-4 flex justify-between items-center rounded-xl mt-5 ">
      <div className="flex items-center ">
        <img
          src={player.player_image}
          className="w-[50px] h-[50px]  rounded-xl"
          alt=""
        />
        <div className="ml-4">
          <h1>{player.player_name}</h1>
          <p className="text-xs">{player.playing_role}</p>
        </div>
      </div>

      <div onClick={handleRemove}>
        <img src="https://i.ibb.co.com/Pv41KzPg/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
