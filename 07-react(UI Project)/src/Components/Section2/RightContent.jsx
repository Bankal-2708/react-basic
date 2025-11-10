import { ImageOff } from 'lucide-react'
import React from 'react'
import {Bar} from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


function RightContent() {

  const data = {
    labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026", "2027"],
     datasets: [
      {
        label: "Sales (in $B)",
        data: [43, 54, 71, 92, 119, 153, 204, 243, 301],
        backgroundColor: "#3B82F6", // Tailwind blue-500
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Company Growth (2019–2027)",
        font: { size: 18 },
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className=' h-fit'>
       <div className="w-2xl h-cover mx-auto bg-white p-6 rounded-2xl shadow-lg overflow-hidden">
      <h2 className="text-lg font-bold text-center mb-4 text-gray-700">📊 Growth Chart</h2>
      <Bar data={data} options={options} />
    </div>
    </div>
  )
}

export default RightContent