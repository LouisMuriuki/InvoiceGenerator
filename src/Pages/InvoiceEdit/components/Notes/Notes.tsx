import React, { useContext } from "react";
import { Input } from "antd";
import { FormContext } from "../../../../Context/FormContext";

const { TextArea } = Input;

const Notes = () => {
  const { forminfo, setFormInfo } = useContext(FormContext);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Change:", e.target.value);
    setFormInfo((prev) => ({ ...prev, notes: e.target.value }));
  };
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold text-gray-700 pb-3">Notes</h2>
      <TextArea
        showCount
        value={forminfo.notes}
        style={{ height: 200, resize: "none" }}
        onChange={onChange}
        placeholder="Notes- any relevant information not covered, addititonal terms and conditions"
      />
    </div>
  );
};

export default Notes;
