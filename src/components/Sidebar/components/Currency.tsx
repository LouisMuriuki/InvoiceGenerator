import { Select, Space, Divider } from "antd";
import clm from "country-locale-map";
import { useContext } from "react";
import { FormContext } from "../../../Context/FormContext";
const { Option } = Select;
const countries = clm.getAllCountries();

const Currency = () => {
  const { setFormInfo } = useContext(FormContext);
  const handleChange = (value: string) => {
    const currency=clm.getCurrencyByName(value)
    setFormInfo((prev: any) => ({ ...prev, currency}));
  };

  return (
    <div className="flex flex-col">
      <p className="flex font-semibold">Currency</p>
      <Divider className="border border-black mt-1" />
      <Select
        style={{ width: "100%" }}
        placeholder="select one country"
        defaultValue={"Kenya"}
        onChange={handleChange}
        optionLabelProp="label"
      >
        {countries.map((country, i) => {
          return (
            <Option value={country.name} label={country.name}>
              <Space>{country.name+" - "+ country.currency}</Space>
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default Currency;
