import Delete from "../assets/svgs/delete";
import Avatar1 from "../assets/images/avatar-img1.jpg";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  Legend
);

const DevelopmentActivity = () => {
  const users = [
    {
      name: "Ronald Bradley",
      img: Avatar1,
      commit: "Intial Commit",
      date: "May 6, 2018",
    },
    {
      name: "Russel Gibson",
      img: Avatar1,
      commit: "Main structure",
      date: "April 22, 2018",
    },
    {
      name: "Beverly Armstrong",
      img: Avatar1,
      commit: "Left sidebar adjustments",
      date: "April 15 2018",
    },
  ];

  // Line chart data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jan", "Feb", "Mar"],
    datasets: [
      {
        data: [0, 45, 28, 80, 50, 70, 0, 45, 28],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        pointRadius: 0, // Removes points on the line
        pointHoverRadius: 0, // Removes points on hover
        borderWidth: 3, // Adjusts the thickness of the line
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // Disables tooltips
      },
    },
    scales: {
      x: {
        display: false, // Hides the x-axis
        grid: {
          display: false, // Removes x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        display: false, // Hides the y-axis
        grid: {
          display: false, // Removes y-axis grid lines
        },
      },
    },
  };

  return (
    <div className="border border-gray-400 shadow-md mt-6 xl:min-w-[600px] xl:max-w-[700px] bg-white">
      <div className="border-b border p-3">
        <h2 className="">Development Activity</h2>
      </div>
      <p className="p-3 flex items-center gap-1">
        <span className="h-3 w-3 rounded-sm bg-blue-600 block"></span>Purchases
      </p>

      {/* Line chart */}
      <div className="py-3 w-full">
        <Line data={data} options={options} />
      </div>

      <div className="p-2">
        <table className="w-full">
          <thead>
            <th className="text-gray-400 font-normal text-sm text-start">
              USER
            </th>
            <th className="text-gray-400 font-normal text-sm text-start">
              COMMIT
            </th>
            <th className="text-gray-400 font-normal text-sm text-start">
              DATE
            </th>
            <th></th>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr>
                  <td className="text-sm flex gap-2">
                    <img
                      src={user.img}
                      alt="Avatar"
                      className="rounded-full"
                      width={30}
                      height={30}
                    />
                    <p>{user.name}</p>
                  </td>
                  <td className="text-sm">{user.commit}</td>
                  <td className="text-sm">{user.date}</td>
                  <td className="text-sm">
                    <Delete />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevelopmentActivity;
