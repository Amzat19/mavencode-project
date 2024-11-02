import Bell from "../assets/svgs/bell";
import Cube from "../assets/svgs/cube";
import Forms from "../assets/svgs/forms";
import Home from "../assets/svgs/home";
import Tab from "../elements/Tab";

const Tabs = () => {
  const tabElements = [
    {
      name: "Home",
      Icon: <Home />,
    },
    {
      name: "Interfaces",
      Icon: <Cube />,
    },
    {
      name: "Components",
      Icon: <Bell />,
    },
    {
      name: "Pages",
      Icon: <Bell />,
    },
    {
      name: "Forms",
      Icon: <Forms />,
    },
    {
      name: "Gallery",
      Icon: <Bell />,
    },
    {
      name: "Documentation",
      Icon: <Bell />,
    },
  ];
  return (
    <div className="p-3 border border-b md:px-20">
      <div className="flex flex-wrap gap-2">
        {tabElements.map((tabElement) => {
          return <Tab name={tabElement.name}>{tabElement.Icon}</Tab>;
        })}
      </div>
    </div>
  );
};

export default Tabs;
