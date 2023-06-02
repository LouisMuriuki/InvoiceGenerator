import { Input, Divider, Button, Checkbox } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { FormContext } from "../../../../Context/FormContext";
const { TextArea } = Input;
const Description = () => {
  const { description,forminfo, setDescription } = useContext(FormContext);
  const handleAddField = () => {
    const newfield = {
      description: "",
      rate: 0,
      qty: 0,
      amount: 0,
      tax: false,
      taxrate: 0,
      additional: "",
    };
    setDescription((prev) => [...prev, newfield]);
  };

  const handleRemoveDescription = (index: number) => {
    const updatedDescriptions = [...description]; // create a copy of the array
    updatedDescriptions.splice(index, 1); // modify the copy by removing the description

    setDescription(updatedDescriptions); // update the state with the modified array
  };
  console.log(description);
  return (
    <div className="">
      <div className="border border-y-stone-950 border-x-white  grid grid-cols-12 p-1 mb-3">
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
          <div className="flex items-start flex-row mb-5" key={i}>
            <div className="">
                 <Button
              type="primary"
              danger
              className="flex items-center w-10 justify-center bg-blue-500 text-white mt-1 mr-2"
              icon={<CloseOutlined />}
              style={{ width: '100%' }}
              onClick={() => {
                handleRemoveDescription(i);
              }}
              size="small"
            />
                </div>
           
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-5 ml-2">
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
              <div className="col-span-2  ml-10">
                <Input
                  placeholder="0.00"
                  defaultValue={(desc?.rate).toLocaleString()}
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
              <div className="col-span-2 ml-10">
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
              <div className="flex justify-end col-span-2">
                <h5>{(desc?.qty * desc?.rate).toLocaleString()}</h5>
              </div>
              <div className="flex justify-end col-span-1">
                <Checkbox
                  onChange={(e) => {
                    setDescription((prev) => {
                      return prev.map((item, index) => {
                        if (i === index) {
                          return { ...item, tax: e.target.checked };
                        }
                        return item;
                      });
                    });
                  }}
                ></Checkbox>
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