import { useState } from "react";
import FormComponent from "../../../../components/Reusables/FormComponent";

const ReceiptientandSender = () => {
  const [fromlabels, setFromLabels] = useState([{
    name: "name",
    label: "Name",
    required: true,
    message: "Please input your Name",
    visible: true,
    placeholder: "John Doe"
  },
  {
    name: "email",
    label: "Email",
    required: true,
    message: "Please input your Email",
    visible: true,
    placeholder: "example@example.com"
  },
  {
    name: "phone",
    label: "Phone",
    required: false,
    message: "Please input your Phone",
    visible: true,
    placeholder: "(123) 456-7890"
  },
  {
    name: "address",
    label: "Address",
    required: false,
    message: "Please input your Address",
    visible: true,
    placeholder: "123 Main St"
  },
  {
    name: "city",
    label: "City",
    required: false,
    message: "Please input your City",
    visible: true,
    placeholder: "New York"
  },
  {
    name: "zipcode",
    label: "Zip Code",
    required: false,
    message: "Please input your Zip Code",
    visible: true,
    placeholder: "10001"
  },
  {
    name: "website",
    label: "Website",
    required: false,
    message: "Please input your Website",
    visible: true,
    placeholder: "https://www.example.com"
  },
  {
    name: "owner",
    label: "Owner",
    required: false,
    message: "Please input the Owner",
    visible: true,
    placeholder: "Business Owner Name"
  }
]);
  const [tolabels, setToLabels] = useState([{
    name: "name",
    label: "Name",
    required: true,
    message: "Please input your Name",
    visible: true,
    placeholder: "John Doe"
  },
  {
    name: "email",
    label: "Email",
    required: true,
    message: "Please input your Email",
    visible: true,
    placeholder: "example@example.com"
  },
  {
    name: "phone",
    label: "Phone",
    required: false,
    message: "Please input your Phone",
    visible: true,
    placeholder: "(123) 456-7890"
  },
  {
    name: "address",
    label: "Address",
    required: false,
    message: "Please input your Address",
    visible: true,
    placeholder: "123 Main St"
  },
  {
    name: "city",
    label: "City",
    required: false,
    message: "Please input your City",
    visible: true,
    placeholder: "New York"
  },
  {
    name: "zipcode",
    label: "Zip Code",
    required: false,
    message: "Please input your Zip Code",
    visible: true,
    placeholder: "10001"
  },
  {
    name: "website",
    label: "Website",
    required: false,
    message: "Please input your Website",
    visible: true,
    placeholder: "https://www.example.com"
  }
  
]);
  return (
    <div className="flex w-full ">
      <div className="flex items-start flex-col w-1/2">
        <h2 className="text-lg font-semibold text-gray-700 pb-3">From</h2>
        <FormComponent fromlabels={fromlabels} />
      </div>
      <div className="flex items-start flex-col w-1/2">
        <h2 className="text-lg font-semibold text-gray-700 pb-3">To</h2>
        <FormComponent tolabels={tolabels}/>
      </div>
    </div>
  );
};

export default ReceiptientandSender;
