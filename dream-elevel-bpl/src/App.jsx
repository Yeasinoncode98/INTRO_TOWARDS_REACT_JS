import { Suspense, useState } from "react";
import "./App.css";

import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import AvailablePlayerss from "./components/AvailablePlayerss/AvailablePlayerss";
import NavBar from "./components/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
const fetchPlayers = async () => {
  const res = await fetch("./players.json");
  return res.json();
};

const playersPromise = fetchPlayers();
function App() {
  const [toggle, setToggle] = useState(true);
  // const playersPromise = fetchPlayers();
  // const [availableBalance, setAvailableBalance] = useState(6000000000);
  const [availableBalance, setAvailableBalance] = useState(60000000);

  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  const removePlayer = (p) => {
    // console.log(p);

    const filteredData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    // console.log(filteredData);
    setPurchasedPlayers(filteredData);
    setAvailableBalance(
      availableBalance +
        parseInt(p.price.split("$").join("").split(",").join(""))
    );
  };

  return (
    <>
      <NavBar availableBalance={availableBalance}></NavBar>
      <div className="mt-4  max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Players"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border   rounded-r-2xl border-l-0 ${
              toggle === false ? "bg-[#E7FE29]" : ""
            } `}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {/* Conditional Rendering */}
      {toggle === true ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center mt-5">
              <span className="loading loading-bars loading-xl "></span>
            </div>
            // <span className="loading loading-bars loading-xl justify-center items-center"></span>
          }
        >
          <AvailablePlayerss
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playersPromise}
          ></AvailablePlayerss>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}

      {/* <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <AvailablePlayerss playersPromise={playersPromise}></AvailablePlayerss>
      </Suspense> */}

      {/* <SelectedPlayers></SelectedPlayers> */}

      <ToastContainer />
    </>
  );
}

export default App;
