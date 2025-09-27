import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

const resultData = [
  { id: 1, name: "Alice", physics: 85, chemistry: 78, math: 92 },
  { id: 2, name: "Bob", physics: 74, chemistry: 88, math: 81 },
  { id: 3, name: "Charlie", physics: 90, chemistry: 82, math: 87 },
  { id: 4, name: "David", physics: 65, chemistry: 72, math: 70 },
  { id: 5, name: "Eva", physics: 95, chemistry: 89, math: 94 },
  { id: 6, name: "Frank", physics: 80, chemistry: 76, math: 85 },
  { id: 7, name: "Grace", physics: 88, chemistry: 91, math: 90 },
  { id: 8, name: "Henry", physics: 70, chemistry: 68, math: 72 },
  { id: 9, name: "Ivy", physics: 92, chemistry: 84, math: 89 },
  { id: 10, name: "Jack", physics: 78, chemistry: 80, math: 83 },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={resultData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math"></Line>
        <Line dataKey={"chemistry"} stroke="red"></Line>
      </LineChart>
    </div>
  );
};

export default ResultsChart;
