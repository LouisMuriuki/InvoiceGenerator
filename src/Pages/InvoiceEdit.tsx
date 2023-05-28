import React from "react";
import Top from "./InvoicePreview/components/top/Top";
import ReceiptientandSender from "./InvoicePreview/components/ReceiptientAnd Sender/ReceiptientandSender";
import InvoiceDetails from "./InvoicePreview/components/Details/Details";
import Notes from "./InvoicePreview/components/Notes/Notes";
import {Divider} from "antd"

const InvoiceEdit = () => {
  return (
    <div className="flex flex-col bg-white">
      <div className="bg-blue-600 w-full h-[4px]"></div>
      <div className="flex flex-col p-10">
        <Top />
        <ReceiptientandSender />
        <Divider/>
        <InvoiceDetails />
        <Notes />
      </div>
    </div>
  );
};

export default InvoiceEdit;
