import React from "react";
import dataset from "./dataset.json";
import "./energyChart.css";
import Header from "../header/header";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function EnergyChart() {
  return (
    <div>
      <Header />
      <div className="d-flex flex-column align-items-center">
        <h1>Month Consumption</h1>
        <BarChart
          className="chartEnergy"
          width={1000}
          height={500}
          data={dataset}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="day" />
          <YAxis tick="None" />
          <Tooltip />
          <Legend />
          <Bar dataKey="energycost" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
}

export default EnergyChart;
