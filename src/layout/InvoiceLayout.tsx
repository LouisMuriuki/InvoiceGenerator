import React from "react";
import InvoiceTop from "./InvoiceTop";

const InvoiceLayout = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center ">
        <div className="flex w-[3/4]">
            <InvoiceTop/>
        </div>
        <div className="flex w-[1/4]"></div>
      </div>
    </div>
  );
};

export default InvoiceLayout;
