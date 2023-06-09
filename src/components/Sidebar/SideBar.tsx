import { useContext } from "react";
import ViewOptions from "./components/Email";
import Currency from "./components/Currency";
// import Tax from "./components/Tax";
import { FormContext } from "../../Context/FormContext";
import Download from "./components/Download";
// import Discount from "./components/Discount";

const SideBar = () => {
  const { generateinvoicetype } = useContext(FormContext);
  return (
    <div className="flex flex-col py-16 px-4">
      <div className="mb-10">
        {generateinvoicetype === "Email" ? <ViewOptions /> : <Download />}
      </div>
      {/* <div className="mb-10">
        <Tax />
      </div>
      <div className="mb-10">
        <Discount />
      </div> */}
      <div className="mb-10">
        <Currency />
      </div>
    </div>
  );
};

export default SideBar;
