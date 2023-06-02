import { Form, Select, Input, Divider, InputNumber } from "antd";
import { useContext } from "react";
import { FormContext } from "../../../Context/FormContext";
const options = [
  {
    value: "none",
    label: "None",
  },
  {
    value: "ontotal",
    label: "On Total",
  },
  // {
  //   value: "peritem",
  //   label: "Per Item",
  // },
];
const Tax = () => {
  const { forminfo, setFormInfo } = useContext(FormContext);
  const onChange = (value: string) => {
    if(value==="none"){
      setFormInfo((prev) => ({ ...prev, mainTax: 0}));
    }else{
      setFormInfo((prev) => ({ ...prev, mainTax: forminfo.mainTax}));
    }
    setFormInfo((prev) => ({ ...prev, taxType: value }));
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className="flex flex-col">
      <p className=" flex font-semibold">TAX</p>
      <Divider className="border border-black mt-1" />
      <Form
        name="tax"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: false }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label={"Type"} name={"type"}>
          <Select
            defaultValue={forminfo.taxType}
            value={forminfo.taxType}
            showSearch
            placeholder="Select"
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={options}
          />
        </Form.Item>
        {forminfo?.taxType === "none" ? null : (
          <>
            <Form.Item label={"Label"} name={"label"}>
              <Input
                type="text"
                defaultValue={forminfo.taxLabel}
                onChange={(e) => {
                  setFormInfo((prev) => ({
                    ...prev,
                    taxLabel: e.target.value,
                  }));
                }}
              />
            </Form.Item>
            <Form.Item label={"Rate"} name={"rate"}>
              <InputNumber
                min={0} // Optional: Set a minimum value if needed
                max={100} // Optional: Set a maximum value if needed
                defaultValue={forminfo?.mainTax}
                value={forminfo?.mainTax||0}
                style={{width:'100%'}}
                formatter={(value) => `${value}.00%`} // Display the value as a percentage
                parser={value => parseFloat(value?.replace('%', '') || '0')}  // Remove the '%' symbol when parsing the input
                onChange={(value) => {
                  if(value){
                     setFormInfo((prev) => ({
                    ...prev,
                    mainTax: value,
                  }));
                  }
                 
                }}
              />
            </Form.Item>
          </>
        )}
      </Form>
    </div>
  );
};

export default Tax;
