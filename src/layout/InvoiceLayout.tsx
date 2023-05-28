import { useContext } from "react";
import InvoiceTop from "./InvoiceTop";
import InvoiceEdit from "../Pages/InvoiceEdit";
import { FormContext } from "../Context/FormContext";
import InvoicePreview from "../Pages/InvoicePreview/InvoicePreview";
import SideBar from "../components/Sidebar/SideBar";

const InvoiceLayout = () => {
  const { selectedoptions } = useContext(FormContext);
  return (
    <div className=" max-w-full  flex container mx-32 py-5 ">
      <div className="flex flex-row w-full">
        <div className=" flex flex-col w-2/3">
          <InvoiceTop />
          {selectedoptions === "Edit" ? <InvoiceEdit /> : <InvoicePreview />}
        </div>
        <div className="flex flex-col w-1/3">
         <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayout;
