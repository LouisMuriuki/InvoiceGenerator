import { useContext } from "react";
import { Segmented, Button, Space } from "antd";
import { FormContext } from "../Context/FormContext";

const InvoiceTop = () => {
  const {
    segmentedoptions,
    selectedoptions,
    setSelectedOptions,
    generateinvoicetype,
    setgenerateInvoiceType,
  } = useContext(FormContext);

  return (
    <div className="flex flex-row ite justify-between pt-4 pb-2">
      <div>
        <Segmented
          size={"large"}
          options={segmentedoptions}
          value={selectedoptions}
          defaultValue={segmentedoptions[0]}
          className="bg-blue-400"
          onChange={(e) => {
            setSelectedOptions(e.toString());
          }}
        />
      </div>
      <div className="">
        <Space wrap>
          <Button
            size={"large"}
            type={generateinvoicetype === "Email" ? "default" : "primary"}
            className={
              generateinvoicetype === "Email"
                ? "flex items-center justify-center border-blue-500 text-blue-500"
                : "flex items-center justify-center bg-blue-500 text-white"
            }
            onClick={() => {
              setgenerateInvoiceType("Email");
            }}
          >
            Email
          </Button>
          <Button
            size={"large"}
            type={generateinvoicetype === "Email" ? "primary" : "default"}
            className={
              generateinvoicetype === "Email"
                ? "flex items-center justify-center bg-blue-500 text-white"
                : "flex items-center justify-center border-blue-500 text-blue-500"
            }
            onClick={() => {
              setgenerateInvoiceType("PDF");
            }}
          >
            PDF
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default InvoiceTop;
