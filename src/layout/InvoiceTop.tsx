import React, { useContext } from "react";
import { Segmented, Button, Space } from "antd";
import { FormContext } from "../Context/FormContext";

const InvoiceTop = () => {
  const {
    segmentedoptions,
    selectedoptions,
    setSelectedOptions,
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
            type="primary"
            className="flex items-center justify-center"
            onClick={() => {
              setgenerateInvoiceType("PDF");
            }}
          >
            PDF
          </Button>
          <Button
            size={"large"}
            type="primary"
            className="flex items-center justify-center"
            onClick={() => {
              setgenerateInvoiceType("Email");
            }}
          >
            Email
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default InvoiceTop;
