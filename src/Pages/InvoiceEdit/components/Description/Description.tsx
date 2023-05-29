import { Input, Divider, Button, Checkbox } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { FormContext } from "../../../../Context/FormContext";
const { TextArea } = Input;
const Description = () => {
  const { description, setDescription } = useContext(FormContext);
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
  console.log(description);
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
          <div className="flex items-start flex-row mb-5" key={i}>
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
              <div className="col-span-2">
                <Input
                  placeholder="0.00"
                  value={desc?.rate}
                  onChange={(e) => {
                    setDescription((prev) => {
                      return prev.map((item, index) => {
                        if (i === index) {
                          return { ...item, rate: e.target.value };
                        }
                        return item;
                      });
                    });
                  }}
                />
              </div>
              <div className="col-span-2">
                <Input
                  placeholder="1"
                  value={desc?.qty}
                  onChange={(e) => {
                    setDescription((prev) => {
                      return prev.map((item, index) => {
                        if (i === index) {
                          return { ...item, qty: e.target.value };
                        }
                        return item;
                      });
                    });
                  }}
                />
              </div>
              <div className="flex justify-end col-span-2">
                <h5>{desc?.qty * desc?.rate}</h5>
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
      <Divider/>
    </div>
  );
};

export default Description;
