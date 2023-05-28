import { createContext, useState } from "react";

interface FormContextType {
  segmentedoptions: string[];
  setSegmentedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedoptions: string;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string>>;
  generateinvoicetype:string;
  setgenerateInvoiceType:React.Dispatch<React.SetStateAction<string>>;
}

export const FormContext = createContext<FormContextType>({
  segmentedoptions: [],
  setSegmentedOptions: () => {},
  selectedoptions:"",
  setSelectedOptions: () => {},
  generateinvoicetype:"",
   setgenerateInvoiceType: () => {}
});

const FormContextProvider = ({ children }: any) => {
  const [segmentedoptions, setSegmentedOptions] = useState(["Edit", "Preview"]);
  const [selectedoptions, setSelectedOptions] = useState("Edit");
  const [generateinvoicetype, setgenerateInvoiceType] = useState("Email");

  return (
    <FormContext.Provider
      value={{
        segmentedoptions,
        setSegmentedOptions,
        selectedoptions,
        setSelectedOptions,
        generateinvoicetype, setgenerateInvoiceType
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
