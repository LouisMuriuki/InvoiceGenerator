import { useContext } from "react";
import { DatePicker, Input, Select, Form } from "antd";
import type { DatePickerProps } from "antd";
import { FormContext } from "../../../../Context/FormContext";
import dayjs from "dayjs";
import useWindowDimensions from "../../../../hooks/useWindoDimensions";
let dateString = new Date().toLocaleDateString();
let dateParts = dateString.split("/");
let year = dateParts[2];
let month = dateParts[0].length === 1 ? "0" + dateParts[0] : dateParts[0];
let day = dateParts[1].length === 1 ? "0" + dateParts[1] : dateParts[1];
let formattedDate = year + "/" + month + "/" + day;
const InvoiceDetails = () => {
  const { width } = useWindowDimensions();
  const { forminfo, setFormInfo } = useContext(FormContext);
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
    //@ts-ignore
    setFormInfo((prev) => ({ ...prev, date: date?.$d }));
  };
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    setFormInfo((prev) => ({ ...prev, terms: value }));
  };
  const options = [
    { value: "none", label: "None" },
    { value: "receipt", label: "Due on Receipt" },
  ];

  for (let i = 1; i <= 20; i++) {
    options.push({ value: `${i}days`, label: `${i} days` });
  }
  return (
    <div className="flex w-full">
      <div className="flex items-start flex-col w-full md:w-1/2 px-4">
        <div className="flex flex-col w-full">
          <Form
            name="details"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: width-50 }}
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={"Number"}
              name={"number"}
              rules={[
                { required: true, message: "Invoice Number is required" },
              ]}
            >
              <Input
                placeholder="Invoice001"
                defaultValue={forminfo.number}
                onChange={(e) => {
                  setFormInfo((prev) => ({ ...prev, number: e.target.value }));
                }}
              />
            </Form.Item>

            <Form.Item
              label={"Date"}
              className="w-full"
              name={"date"}
              rules={[{ required: true, message: "Date is required" }]}
            >
              <DatePicker className="w-full" value={dayjs(formattedDate, 'YYYY-MM-DD')} onChange={onChange} />
            </Form.Item>
            <Form.Item
              label={"Terms"}
              name={"terms"}
              rules={[{ required: true, message: "Invoice terms is required" }]}
            >
              <Select
                defaultValue={forminfo.terms}
                onChange={handleChange}
                options={options}
              />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="flex items-start flex-col w-1/2"></div>
    </div>
  );
};

export default InvoiceDetails;
