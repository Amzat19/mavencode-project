import Box from "../elements/Box";

const Metrics = () => {
  const boxElements = [
    {
      count: 43,
      name: "New Tickets",
      increase: true,
      increasePercentage: 6,
      currency: null,
    },
    {
      count: 17,
      name: "Closed Today",
      increase: false,
      increasePercentage: 3,
      currency: null,
    },
    {
      count: 7,
      name: "New Replies",
      increase: true,
      increasePercentage: 9,
      currency: null,
    },
    {
      count: 27300,
      name: "New Followers",
      increase: true,
      increasePercentage: 3,
      currency: null,
    },
    {
      count: 95,
      name: "Daily Earnings",
      increase: false,
      increasePercentage: 2,
      currency: "$",
    },
    {
      count: 621,
      name: "Products",
      increase: false,
      increasePercentage: 1,
      currency: null,
    },
  ];
  return (
    <div className="flex flex-wrap gap-3 items-center justify-around md:justify-between">
      {boxElements.map((element) => {
        return <Box element={element} />;
      })}
    </div>
  );
};

export default Metrics;
