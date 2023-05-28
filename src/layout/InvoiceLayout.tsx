import React from "react";
import InvoiceTop from "./InvoiceTop";
import InvoiceEdit from "../Pages/InvoiceEdit";

const InvoiceLayout = () => {
  return (
    <div className=" max-w-full  flex container mx-32 py-5 ">
      <div className="flex flex-row w-full">
        <div className=" flex flex-col w-2/3">
            <InvoiceTop/>
            <InvoiceEdit/>
        </div>
        <div className="flex flex-col w-1/3">
            <p>some details</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceLayout;
