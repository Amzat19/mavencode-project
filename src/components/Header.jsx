import Bell from "../assets/svgs/bell";
import Button from "../elements/Button";
import Avatar from "../assets/images/avatar-img.jpg";

const Header = () => {
  return (
    <header className="flex justify-between border border-b p-3 md:px-20">
      <span className="font-semibold text-lg self-center">tableau</span>
      <div className="flex gap-2 items-center">
        <Button
          className={
            "text-blue-500 border-blue-600 border rounded-md p-1 h-7 text-xs w-fit min-w-20 font-semibold"
          }
        >
          Source code
        </Button>
        <Bell />
        <div className="flex gap-2">
          <img
            src={Avatar}
            alt="Avatar of the user"
            width={30}
            height={30}
            className="rounded-full"
          />
          <div>
            <p className="text-xs">Jane Pearson</p>
            <p className="text-xs">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
