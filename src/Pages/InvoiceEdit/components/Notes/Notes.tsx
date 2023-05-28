import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log("Change:", e.target.value);
};

const Notes = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-semibold text-gray-700 pb-3">Notes</h2>
      <TextArea
        showCount
        maxLength={300}
        style={{ height: 120, resize: "none" }}
        onChange={onChange}
        placeholder="Notes- any relevant information not covered, addititonal terms and conditions"
      />
    </div>
  );
};

export default Notes;
