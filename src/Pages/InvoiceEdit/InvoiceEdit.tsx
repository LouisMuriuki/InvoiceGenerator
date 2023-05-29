
import Top from "./components/top/Top";
import ReceiptientandSender from "./components/ReceiptientAnd Sender/ReceiptientandSender";
import InvoiceDetails from "./components/Details/Details";
import Notes from "./components/Notes/Notes";
import {Divider} from "antd"
import Description from "./components/Description/Description";

const InvoiceEdit = () => {
  return (
    <div className="flex flex-col bg-white shadow-lg">
      <div className="bg-blue-600 w-full h-[4px]"></div>
      <div className="flex flex-col py-10 px-3">
        <Top />
        <ReceiptientandSender />
        <Divider/>
        <InvoiceDetails />
        <Description/>
        <Notes />
      </div>
    </div>
  );
};

export default InvoiceEdit;
