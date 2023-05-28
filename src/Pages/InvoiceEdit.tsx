import React from "react";
import Top from "../components/top/Top";
import ReceiptientandSender from "../components/ReceiptientAnd Sender/ReceiptientandSender";
import InvoiceDetails from "../components/InvoiceDetails/InvoiceDetails";
import Notes from "../components/Notes/Notes";

const InvoiceEdit = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-blue-600 w-full h-[4px]"></div>
      <div className="flex flex-col p-10">
        <Top />
        <ReceiptientandSender />
        <InvoiceDetails />
        <Notes />
      </div>
    </div>
  );
};

export default InvoiceEdit;
