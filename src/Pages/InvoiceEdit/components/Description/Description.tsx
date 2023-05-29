import { Input, Divider, Button } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";
const { TextArea } = Input;
const Description = () => {
  const { description, setDescription } = useContext(FormContext);
  const handleAddField = () => {
    const newfield = {
      description: "",
      rate: "",
      qty: "",
      amount: 0,
      tax: 0,
      additional: "",
    };
    setDescription((prev) => ([...prev, newfield ]));
  };
  return (
    <div className="">
      <div className="border border-t-stone-950 border-b-stone-950 grid grid-cols-12 py-1 mb-3">
        <div className="col-span-5">
          <h5>Description</h5>
        </div>
        <div className="col-span-2">
          <h5 className="flex items-center justify-end">Rate</h5>
        </div>
        <div className="col-span-2">
          <h5 className="flex items-center justify-end">Qty</h5>
        </div>
        <div className="col-span-2">
          <h5 className="flex items-center justify-end">Amount</h5>
        </div>
        <div className="col-span-1">
          <h5 className="flex items-center justify-end">Tax</h5>
        </div>
      </div>
      {description.map((desc, i) => {
        return (
          <div className="flex items-start flex-row mb-5">
            <Button
              type="primary"
              className="flex min-w-max items-center justify-center bg-blue-500 text-white mt-1 mr-1"
              icon={<CloseOutlined />}
              size="small"
            />
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-5">
                <div className="grid-rows-2">
                  <div className="mb-2">
                    <Input
                      placeholder="Item Description"
                      value={desc.description}
                    />
                  </div>

                  <TextArea
                    placeholder="Additional details"
                    value={desc.additional}
                  />
                </div>
              </div>
              <div className="col-span-2">
                <Input placeholder="0.00" value={desc.rate} />
              </div>
              <div className="col-span-2">
                <Input placeholder="1" />
              </div>
              <div className="col-span-2">
                <h5>Amount</h5>
              </div>
              <div className="col-span-1">
                <h5>Tax</h5>
              </div>
            </div>
          </div>
        );
      })}

      <Divider dashed />
      <Button
        type="primary"
        className="flex items-center justify-center bg-blue-500 text-white"
        icon={<PlusOutlined />}
        onClick={handleAddField}
        size="small"
      />
    </div>
  );
};

export default Description;
