import React, { useState } from "react";
import FormComponent from "../Reusables/FormComponent";

const ReceiptientandSender = () => {
  const [fromlabels, setFromLabels] = useState([{
    name: "name",
    label: "Name",
    required: true,
    message: "Please input your Name",
    visible: true
  },
  {
    name: "email",
    label: "Email",
    required: true,
    message: "Please input your Email",
    visible: true
  },
  {
    name: "phone",
    label: "Phone",
    required: false,
    message: "Please input your Phone",
    visible: true
  },
  {
    name: "address",
    label: "Address",
    required: true,
    message: "Please input your Address",
    visible: true
  },
  {
    name: "city",
    label: "City",
    required: true,
    message: "Please input your City",
    visible: true
  },
  {
    name: "zipcode",
    label: "Zip Code",
    required: true,
    message: "Please input your Zip Code",
    visible: true
  },
  {
    name: "businessNumber",
    label: "Business Number",
    required: false,
    message: "Please input your Business Number",
    visible: true
  },
  {
    name: "website",
    label: "Website",
    required: false,
    message: "Please input your Website",
    visible: true
  },
  {
    name: "owner",
    label: "Owner",
    required: true,
    message: "Please input the Owner",
    visible: true
  }
]);
  const [tolabels, setToLabels] = useState([{
    name: "name",
    label: "Name",
    required: true,
    message: "Please input your Name",
    visible: true
  },
  {
    name: "email",
    label: "Email",
    required: true,
    message: "Please input your Email",
    visible: true
  },
  {
    name: "phone",
    label: "Phone",
    required: false,
    message: "Please input your Phone",
    visible: true
  },
  {
    name: "address",
    label: "Address",
    required: true,
    message: "Please input your Address",
    visible: true
  },
  {
    name: "city",
    label: "City",
    required: true,
    message: "Please input your City",
    visible: true
  },
  {
    name: "zipcode",
    label: "Zip Code",
    required: true,
    message: "Please input your Zip Code",
    visible: true
  },
  {
    name: "website",
    label: "Website",
    required: false,
    message: "Please input your Website",
    visible: true
  },
  
]);
  return (
    <div className="flex  justify-between">
      <div className="flex flex-col">
        <h2>From</h2>
        <FormComponent fromlabels={fromlabels} />
      </div>
      <div className="flex flex-col">
        <h2>To</h2>
        <FormComponent tolabels={tolabels}/>
      </div>
    </div>
  );
};

export default ReceiptientandSender;
