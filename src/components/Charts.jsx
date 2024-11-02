import DonutChart from "../elements/DonutChart";
import PieChart from "../elements/PieChart";

const Charts = () => {
  return (
    <div className="mt-6 xl:min-w-[600px]">
      <p className="bg-blue-500 text-sm p-2 rounded-sm">
        <span className="font-semibold">Read our documentation</span> with code
        samples
      </p>
      <div className="xl:flex gap-2 w-full">
        <div>
          <DonutChart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Charts;
