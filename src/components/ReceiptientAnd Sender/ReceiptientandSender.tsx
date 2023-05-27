import React, { useState } from "react";
import FormComponent from "../Reusables/FormComponent";

const ReceiptientandSender = () => {
  const [fromlabels, setFromLabels] = useState([]);
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h2>From</h2>
        <FormComponent />
      </div>
      <div className="flex flex-col">
        <h2>To</h2>
        <FormComponent />
      </div>
    </div>
  );
};

export default ReceiptientandSender;
