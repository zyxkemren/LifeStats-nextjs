"use client";

import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

type Props = {
  data: any;
  options: any;
};

export default function RadarChart({ data, options }: Props) {
  return (
    <div className="stats-radar w-full p-4 rounded-xl shadow">
      <Radar data={data} options={options} />
    </div>
  );
}
