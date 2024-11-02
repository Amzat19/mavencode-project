import Charts from "./Charts";
import DevelopmentActivity from "./DevelopmentActivity";
import Metrics from "./Metrics";

const Dashboard = () => {
  return (
    <section className="p-3 md:px-16 bg-blue-100">
      <h1 className="font-semibold text-gray-500 mb-2">Dashboard</h1>
      <Metrics />
      <div className="xl:flex xl:justify-between md:gap-4">
        <DevelopmentActivity />
        <Charts />
      </div>
    </section>
  );
};

export default Dashboard;
