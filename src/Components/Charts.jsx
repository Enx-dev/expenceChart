import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Title,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import userData from "../data/data.json";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Charts = () => {
  const [data, useData] = useState({
    labels: userData.map((data) => data.day),
    datasets: [
      {
        label: "Amount spent",
        data: userData.map((data) => data.amount),
        backgroundColor: [
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(186, 34%, 60%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
          "hsl(10, 79%, 65%)",
        ],
        hoverBackgroundColor: [
          "hsla(10, 79%, 65%, 0.5)",
          "hsla(10, 79%, 65%, 0.5)",
          "hsla(186,34%, 60%, 0.5)",
          "hsla(10, 79%, 65%, 0.5)",
          "hsla(10, 79%, 65%, 0.5)",
          "hsla(10, 79%, 65%, 0.5)",
          "hsla(10, 79%, 65%, 0.5)",
        ],
      },
    ],
  });
  return (
    <div className='Charts'>
      <h1 className='Charts_title'>Spending - Last 7 days</h1>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: { grid: { display: false } },
            y: { display: false, grid: { display: false } },
          },
        }}
      />
    </div>
  );
};

export default Charts;
