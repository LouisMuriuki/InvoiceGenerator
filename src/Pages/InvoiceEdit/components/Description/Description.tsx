import { Input, Divider, Button, InputNumber } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { FormContext } from "../../../../Context/FormContext";
const { TextArea } = Input;
const Description = () => {
  const { description, setDescription } = useContext(FormContext);
  const handleAddField = () => {
    const newfield = {
      description: "",
      rate: undefined as unknown as number,
      qty: 1,
      amount: 0,
      tax: false,
      taxrate: 0,
      additional: "",
    };
    setDescription((prev) => [...prev, newfield]);
  };

  console.log(description);

  const handleRemoveDescription = (index: number) => {
    const updatedDescriptions = [...description]; // create a copy of the array
    updatedDescriptions.splice(index, 1); // modify the copy by removing the description

    setDescription(updatedDescriptions); // update the state with the modified array
  };
  return (
    <div className="">
      <div className="border border-y-stone-950 border-x-white hidden md:grid grid-cols-12 p-1 mb-3">
        <div className="col-span-4">
          <h5>Description</h5>
        </div>
        <div className="col-span-2">
          <h5 className="flex items-center justify-end">Rate</h5>
        </div>
        <div className="col-span-1"></div>
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
      <div className="flex md:hidden p-3">
        <p className="font-bold ">Products/Services</p>
      </div>
      {description.map((desc, i) => {
        return (
          <div className="flex items-start flex-row mb-5" key={i}>
            <div className="">
              <Button
                type="primary"
                danger
                className="flex items-center w-10 justify-center bg-blue-500 text-white mt-1 mr-2"
                icon={<CloseOutlined />}
                style={{ width: "100%" }}
                onClick={() => {
                  handleRemoveDescription(i);
                }}
                size="small"
              />
            </div>

            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-12 md:col-span-4 ml-2">
                <div className="grid-rows-2">
                  <div className="mb-2">
                    <Input
                      placeholder="Item Description"
                      value={desc?.description}
                      onChange={(e) => {
                        setDescription((prev) => {
                          return prev.map((item, index) => {
                            if (i === index) {
                              return { ...item, description: e.target.value };
                            }
                            return item;
                          });
                        });
                      }}
                    />
                  </div>
                  <TextArea
                    placeholder="Additional details"
                    style={{ height: 20, resize: "none" }}
                    value={desc?.additional}
                    onChange={(e) => {
                      setDescription((prev) => {
                        return prev.map((item, index) => {
                          if (i === index) {
                            return { ...item, additional: e.target.value };
                          }
                          return item;
                        });
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-span-3 md:col-span-2 mt-3 md:mt-0  ml-2 md:ml-10">
                <Input
                  placeholder="price"
                  defaultValue={desc?.rate?.toLocaleString()}
                  onChange={(e) => {
                    setDescription((prev) => {
                      return prev.map((item, index) => {
                        if (i === index) {
                          return { ...item, rate: parseFloat(e.target.value) };
                        }
                        return item;
                      });
                    });
                  }}
                />
              </div>
              <div className="col-span-1 md:col-span-0 mt-3 md:mt-0 ml-2 md:ml-10">
                <p className="flex items-center mt-1 justify-center">X</p>
              </div>
              <div className="col-span-2 md:col-span-2 mt-3 md:mt-0 ml-2 md:ml-10">
                <Input
                  placeholder="1"
                  defaultValue={desc?.qty}
                  onChange={(e) => {
                    setDescription((prev) => {
                      return prev.map((item, index) => {
                        if (i === index) {
                          return { ...item, qty: parseFloat(e.target.value) };
                        }
                        return item;
                      });
                    });
                  }}
                />
              </div>
              <div className="flex justify-center md:justify-end mt-3 md:mt-0 col-span-3 md:col-span-2">
                <h5 className="flex mt-1">
                  {desc?.rate > 0 &&
                    (
                      desc?.qty * desc?.rate +
                      (desc.taxrate * (desc?.qty * desc?.rate)) / 100
                    )?.toLocaleString()}
                </h5>
              </div>
              <div className="flex justify-end items-start mt-3 md:mt-0 col-span-3 md:col-span-1 ml-1">
                <label className="flex md:hidden mt-1 ml-[-10px] mr-1 text-gray-400">Tax:</label>
                <InputNumber
                  placeholder="tax-rate"
                  
                  value={desc?.taxrate || 0}
                  formatter={(value) => `${value}.00%`}      
                  parser={(value) => parseFloat(value?.replace("%", "") || "0")} 
                  onChange={(value) => {
                    //@ts-ignore
                    setDescription((prev) => {
                      return prev.map((item, index) => {
                        if (i === index) {
                          return {
                            ...item,
                            taxrate: value !== undefined ? value : 0,
                          };
                        }
                        return item;
                      });
                    });
                  }}
                />
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
      <Divider />
    </div>
  );
};

export default Description;
