import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LogarithmicScale,
  Legend,
  Tooltip,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LogarithmicScale,
  Legend,
  Tooltip
);

interface ChartPanelProps {
  data: any;
}

export const ChartPanel: FC<ChartPanelProps> = (props) => {
  const { data } = props;

  return (
    <Line
      data={data}
      options={{
        scales: {
          x: {
            type: "logarithmic",
            position: "left", // `axis` is determined by the position as `'y'`
          },
        },
      }}
    />
  );
};
