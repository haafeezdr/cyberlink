"use client";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Title,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  Title,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const ChartCard = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["2017","2018","2019", "2020", "2021", "2022", "2023"],
      datasets: [
        {
          label: "performance",
          data: [8514, 11255, 9885, 15554, 28551, 26318, 21579],
          borderColor: "#F1F5F9",
          backgroundColor: "#3482F6",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Student Performance",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className="bg-[#1B264F] m-auto h-[25vh] w-[85%] rounded-lg border md:col-span-2 lg:h-[50vh]">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

 export default ChartCard