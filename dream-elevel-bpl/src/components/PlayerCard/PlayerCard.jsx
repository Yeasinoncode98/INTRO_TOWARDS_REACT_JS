import React, { useState } from "react";
import userImg from "../../assets/user-1.png";
import flagImg from "../../assets/Vector.png";
import { toast } from "react-toastify";

const PlayerCard = ({
  player,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("$").join("").split(",").join("")
    );

    if (availableBalance < playerPrice) {
      toast("Not Have Enough Money to Buy Players");
      return;
    }

    if (purchasedPlayers.length === 6) {
      toast("Six Players Already Selected");
      return;
    }

    setIsSelected(true);
    setAvailableBalance(availableBalance - playerPrice);

    setPurchasedPlayers([...purchasedPlayers, playerData]);
    toast("Player Purchased!");
  };

  return (
    <div className="card bg-base-100  shadow-sm p-4">
      <figure>
        <img
          src={player.player_image}
          alt={""}
          className="w-full h-[300px] object-cover"
        />
      </figure>
      <div className="mt-4">
        <div className="flex gap-2 ">
          <img src={userImg} alt="" />{" "}
          <h2 className="card-title ml-2 ">{player.player_name}</h2>
        </div>

        <div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
          <div className="flex items-center ">
            <img className="w-[25px] h-[25px]" src={flagImg} alt="" />
            <span className="ml-4">{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between mt-4 font-bold">
          <span>Rating:</span>
          <span>{player.rating}</span>
        </div>

        <div className="flex justify-between mt-4 ">
          <span className="font-bold">{player.batting_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions mt-3 flex justify-between items-center">
          <p className="font-bold">Price: {player.price}</p>
          <button
            disabled={isSelected}
            onClick={() => {
              handleSelected(player);
            }}
            className="btn"
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;

// import React, { useState } from "react";
// import userImg from "../../assets/user-1.png";
// import flagImg from "../../assets/Vector.png";

// const PlayerCard = ({ player, setAvailableBalance, availableBalance }) => {
//   const [isSelected, setIsSelected] = useState(false);

//   const handleSelect = () => {
//     if (!isSelected) {
//       setIsSelected(true);
//       // Deduct the player price from available balance
//       setAvailableBalance((prev) => prev - player.price);
//     }
//   };

//   return (
//     <div className="card bg-base-100 shadow-sm p-4">
//       <figure>
//         <img
//           src={player.player_image}
//           alt={player.player_name}
//           className="w-full h-[300px] object-cover"
//         />
//       </figure>

//       <div className="mt-4">
//         {/* Player Name */}
//         <div className="flex gap-2">
//           <img src={userImg} alt="user icon" />
//           <h2 className="card-title ml-2">{player.player_name}</h2>
//         </div>

//         {/* Country + Role */}
//         <div className="flex justify-between mt-4 border-b border-gray-400 pb-2">
//           <div className="flex items-center">
//             <img className="w-[25px] h-[25px]" src={flagImg} alt="flag" />
//             <span className="ml-4">{player.player_country}</span>
//           </div>
//           <button className="btn">{player.playing_role}</button>
//         </div>

//         {/* Rating */}
//         <div className="flex justify-between mt-4 font-bold">
//           <span>Rating:</span>
//           <span>{player.rating}</span>
//         </div>

//         {/* Batting & Bowling Style */}
//         <div className="flex justify-between mt-4">
//           <span className="font-bold">{player.batting_style}</span>
//           <span>{player.bowling_style}</span>
//         </div>

//         {/* Price + Select Button */}
//         <div className="card-actions mt-3 flex justify-between items-center">
//           <p className="font-bold">Price: {player.price}</p>
//           <button
//             disabled={isSelected || player.price > availableBalance} // disable if already selected or not enough balance
//             onClick={handleSelect}
//             className={`btn ${
//               isSelected ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
//             }`}
//           >
//             {isSelected ? "Selected" : "Choose Player"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayerCard;
