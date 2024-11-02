import formatCount from "../utils/formatCount";

const Box = ({ element }) => {
  return (
    <div className="flex flex-col w-[150px] h-[100px] border border-gray-400 shadow-sm p-2 xl:w-[180px] xl:h-[120px] bg-white">
      <p
        className={`self-end ${
          element.increase ? "text-green-400" : "text-red-500"
        } text-sm`}
      >
        {element.increase ? "+" : "-"}
        {element.increasePercentage}%
        <span className={`${element.increase ? "" : "rotate-90"}`}>^</span>
      </p>
      <div className="self-center">
        <p className="text-center text-2xl font-bold">
          {element.currency ? element.currency : ""}
          {formatCount(element.count)}
        </p>
        <span className="text-center">{element.name}</span>
      </div>
    </div>
  );
};

export default Box;
