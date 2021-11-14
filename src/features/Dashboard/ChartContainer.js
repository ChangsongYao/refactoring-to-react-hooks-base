import React, { useContext } from "react";
import LineChart from "./LineChart";
import { GlobalContext } from "../../App";


const ChartContainer = ({ selectedLabel }) => {

  const { data: dataset } = useContext(GlobalContext);

  const chartLabels = dataset.map(dataPoint => dataPoint.timestamp);
  const chartValues = dataset.map(dataPoint => dataPoint.amount);

  return (
    <div>
      <LineChart
        chartLabels={chartLabels}
        chartValues={chartValues}
        label={selectedLabel}
      />
    </div>
  );
};


export default ChartContainer;
