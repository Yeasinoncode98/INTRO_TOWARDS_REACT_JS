import React, { use } from "react";
// import userImg from "../../assets/user-1.png";
// import flagImg from "../../assets/Vector.png";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayerss = ({
  playersPromise,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchasedPlayers,
}) => {
  const playerData = use(playersPromise);
  // console.log(playerData);

  return (
    <div className="max-w-[1200px] mx-auto mt-[50px] grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Map Done here */}
      {/* {playerData.map((player) =>} */}

      {playerData.map((player) => (
        <PlayerCard
          setPurchasedPlayers={setPurchasedPlayers}
          purchasedPlayers={purchasedPlayers}
          availableBalance={availableBalance}
          setAvailableBalance={setAvailableBalance}
          player={player}
        ></PlayerCard>
      ))}

      {/* Map Ended Here */}
    </div>
  );
};

export default AvailablePlayerss;
