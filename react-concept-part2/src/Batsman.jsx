import { useState } from "react";

export default function Batsman() {
  let [runs, setRuns] = useState(0);

  const [sixes, setSixes] = useState(0);

  const handleSingles = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };
  const handleDoubles = () => {
    const updateRuns = runs + 2;
    setRuns(updateRuns);
  };

  const handleFours = () => {
    const updatedRUns = runs + 4;
    setRuns(updatedRUns);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatesSixes = sixes + 1;
    setSixes(updatesSixes);
    setRuns(updatedRuns);
  };

  const cricketStyles = {
    border: "2px solid green",
    marginBottom: "10px",
  };

  return (
    <div style={cricketStyles}>
      <h3>Player: Bangla Batsman</h3>
      <p>
        <small>Sixes : {sixes}</small>
      </p>
      {/* Conditional rendering here is done for runs */}
      {runs > 50 && <p>Your Score: {runs}</p>}
      <h1>Score: {runs} </h1>
      <button onClick={handleSingles}>Singles</button>
      <button onClick={handleDoubles}>Doubles</button>
      <button onClick={handleFours}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
