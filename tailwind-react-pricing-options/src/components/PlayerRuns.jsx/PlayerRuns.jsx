import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const cricketData = [
  { id: 1, name: "Virat Kohli", runs: 120, wickets: 0, catches: 2 },
  { id: 2, name: "Babar Azam", runs: 95, wickets: 0, catches: 1 },
  { id: 3, name: "Shakib Al Hasan", runs: 65, wickets: 3, catches: 1 },
  { id: 4, name: "Ben Stokes", runs: 80, wickets: 2, catches: 2 },
  { id: 5, name: "Rashid Khan", runs: 30, wickets: 4, catches: 0 },
  { id: 6, name: "MS Dhoni", runs: 55, wickets: 0, catches: 3 },
  { id: 7, name: "David Warner", runs: 105, wickets: 0, catches: 1 },
  { id: 8, name: "Kane Williamson", runs: 75, wickets: 1, catches: 1 },
  { id: 9, name: "Jasprit Bumrah", runs: 20, wickets: 5, catches: 0 },
  { id: 10, name: "Rohit Sharma", runs: 110, wickets: 0, catches: 2 },
];

const PlayerRuns = () => {
  return (
    <div>
      <LineChart width={800} height={800} data={cricketData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Line dataKey={"runs"} stroke="#8884d8"></Line>
        <Line dataKey={"catches"} stroke="#a52a2a"></Line>
      </LineChart>
    </div>
  );
};

export default PlayerRuns;
