import { createContext, useState } from "react";

interface FormContextType {
  segmentedoptions: string[];
  setSegmentedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedoptions: string;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string>>;
}

export const FormContext = createContext<FormContextType>({
  segmentedoptions: [],
  setSegmentedOptions: () => {},
  selectedoptions:"",
  setSelectedOptions: () => {},
});

const FormContextProvider = ({ children }: any) => {
  const [segmentedoptions, setSegmentedOptions] = useState(["Edit", "Preview"]);
  const [selectedoptions, setSelectedOptions] = useState("Edit");

  return (
    <FormContext.Provider
      value={{
        segmentedoptions,
        setSegmentedOptions,
        selectedoptions,
        setSelectedOptions,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
