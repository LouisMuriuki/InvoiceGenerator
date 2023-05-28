import { Form, Select, Input ,Divider} from "antd";
const Tax = () => {
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
        <Form.Item label={"Type"} name={"type"}>
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
        </Form.Item>
        <Form.Item label={"Type"} name={"type"}>
          <Input type="number" />
        </Form.Item>
        <Form.Item label={"Type"} name={"type"}>
          <Input type="number" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Tax;
