import { useContext } from "react";
import InvoiceTop from "./InvoiceTop";
import InvoiceEdit from "../Pages/InvoiceEdit/InvoiceEdit";
import { FormContext } from "../Context/FormContext";
import InvoicePreview from "../Pages/InvoicePreview/InvoicePreview";
import SideBar from "../components/Sidebar/SideBar";

const InvoiceLayout = () => {
  const { selectedoptions } = useContext(FormContext);

  return (
    <div className=" max-w-full  flex container mx-0 md:mx-32 px-2 md:px-0 py-1 md:py-5 ">
      <div className="flex flex-col md:flex-row w-full">
        <div className=" flex flex-col w-full md:w-3/4">
          <InvoiceTop />
          {selectedoptions === "Edit" ? <InvoiceEdit /> : <InvoicePreview />}
        </div>
        <div className="flex flex-col w-full md:w-1/4">
         <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayout;
