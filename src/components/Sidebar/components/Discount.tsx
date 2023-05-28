import { Divider, Select,Form,Input } from "antd";
const Discount = () => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <div className="flex flex-col">
      <p className="font-semibold">TAX</p>
      <Divider className="border border-black p-0" />
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
      />
       <Form.Item label={"Type"} name={"type"}>
          <Input type="number" />
        </Form.Item>
    </div>
  );
};

export default Discount;
