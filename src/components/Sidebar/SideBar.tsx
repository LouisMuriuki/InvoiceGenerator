
import ViewOptions from "./components/ViewOptions";
import Currency from "./components/Currency";
import Tax from "./components/Tax";


const SideBar = () => {
  return (
    <div className="flex flex-col py-16 px-4">
    <ViewOptions/>
    <Tax/>
    <Currency/>
    </div>
  );
};

export default SideBar;
