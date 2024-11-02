const Tab = ({ children, name }) => {
  return (
    <div className="flex gap-1 items-center">
      {children}
      <p className="text-gray-400 text-xs font-semibold">{name}</p>
    </div>
  );
};

export default Tab;
