import { Divider, Select, Form, Input, InputNumber } from "antd";
import { useContext } from "react";
import { FormContext } from "../../../Context/FormContext";
const options = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "amount",
    label: "Flat Amount",
  },
  {
    value: "percent",
    label: "Percent",
  },
];
const Discount = () => {
  const { forminfo, setFormInfo } = useContext(FormContext);
  const onChangeType = (value: string) => {
    if(value==="none"){
      setFormInfo((prev) => ({ ...prev, discount: 0}));
    }else{
      setFormInfo((prev) => ({ ...prev, discount: forminfo.discount}));
    }
    setFormInfo((prev) => ({
      ...prev,
      discountType: value,
    }));
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className="flex flex-col">
      <p className="font-semibold">Discount</p>
      <Divider className="border border-black p-0" />
      <Form
        name="discount"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: false}}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label={"Type"} name={"typej"}>
          <Select
            defaultValue={forminfo.discountType}
            showSearch
            placeholder="Select"
            optionFilterProp="children"
            onChange={onChangeType}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={options}
          />
        </Form.Item>
        {forminfo?.discountType === "none" ? null : (
          <Form.Item
            label={forminfo.discountType === "percent" ? "Percent" : "Amount"}
            name={forminfo.discountType === "percent" ? "percent" : "amount"}
          >
            {forminfo?.discountType === "percent" ? (
              <InputNumber
                min={0}
                max={100}
                value={forminfo?.discount}
                defaultValue={forminfo?.discount}
                style={{ width: "100%" }}
                formatter={(value) => `${value}.00%`} // Display the value as a percentage
                parser={(value) => parseFloat(value?.replace("%", "") || "0")} // Remove the '%' symbol when parsing the input
                onChange={(value) => {
                  if (value) {
                    setFormInfo((prev) => ({
                      ...prev,
                      discount: value,
                    }));
                  }
                }}
              />
            ) : (
              <Input
                type="number"
                defaultValue={forminfo.discount}
                onChange={(e) =>
                  setFormInfo((prev) => ({
                    ...prev,
                    discount: parseFloat(e.target.value),
                  }))
                }
              />
            )}
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default Discount;
