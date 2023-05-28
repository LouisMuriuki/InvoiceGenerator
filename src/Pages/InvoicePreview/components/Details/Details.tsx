import React from "react";
import { DatePicker, Input, Select, Form } from "antd";
import type { DatePickerProps } from "antd";
const InvoiceDetails = () => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col items-start justify-between">
      <div className="flex flex-col gap-2">
        <Form
          name="basic"
          labelCol={{ span: 9 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label={"Number"}
            name={"number"}
            rules={[{ required: true, message: "Invoice Number is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={"Date"}
            name={"date"}
            rules={[{ required: true, message: "Date is required" }]}
          >
            <DatePicker onChange={onChange} />
          </Form.Item>
          <Form.Item
            label={"terms"}
            name={"terms"}
            rules={[{ required: true, message: "Invoice terms is required" }]}
          >
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </Form.Item>
        </Form>
      </div>
      <div></div>
    </div>
  );
};

export default InvoiceDetails;
