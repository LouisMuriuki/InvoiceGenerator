import { Select, Space ,Divider} from "antd";
// import getSymbolFromCurrency from 'currency-symbol-map'
// import { useContext } from "react";
// import { FormContext } from "../../../Context/FormContext";
const { Option } = Select;


const Currency = () => {
  // const { forminfo, setFormInfo } = useContext(FormContext);
  const handleChange = (value: string[]) => {
    // setFormInfo((prev) => ({
    //   ...prev,
    //   currency: value,
    // }));
  
    console.log(`selected ${value}`);
  };
  
  return (
    <div className="flex flex-col">
      <p className="flex font-semibold">Currency</p>
      <Divider className="border border-black mt-1" />
      <Select
        style={{ width: "100%" }}
        placeholder="select one country"
        defaultValue={["china"]}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <Space>
            <span role="img" aria-label="China">
              KS
            </span>
            Kenya 
          </Space>
        </Option>
        <Option value="usa" label="USA">
          <Space>
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA 
          </Space>
        </Option>
        <Option value="japan" label="Japan">
          <Space>
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan 
          </Space>
        </Option>
        <Option value="korea" label="Korea">
          <Space>
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea 
          </Space>
        </Option>
      </Select>
    </div>
  );
};

export default Currency;
