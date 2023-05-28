import ViewOptions from "./components/ViewOptions";
import Currency from "./components/Currency";
import Tax from "./components/Tax";

const SideBar = () => {
  return (
    <div className="flex flex-col py-16 px-4">
      <div className="mb-10">
        <ViewOptions />
      </div>
      <div className="mb-10">
        <Tax />
      </div>
      <div className="mb-10">
        <Currency />
      </div>
    </div>
  );
};

export default SideBar;
