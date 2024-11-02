import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  // Data for the charts
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My Chart",
        data: [300, 50, 100],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the charts
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const total = tooltipItem.dataset.data.reduce(
              (acc, val) => acc + val,
              0
            );
            const currentValue = tooltipItem.raw;
            const percentage = ((currentValue / total) * 100).toFixed(2) + "%"; // Calculate percentage
            return percentage; // Return the percentage as the label
          },
        },
      },
    },
  };

  return (
    <div className="border border-gray-400 mt-4 bg-white">
      <div className="p-3 border border-b border-gray-400">
        <p>Chart title</p>
      </div>
      {/* Donut Chart */}
      <div className="px-8 py-8 xl:px-16 xl:max-w-[280px]">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DonutChart;
