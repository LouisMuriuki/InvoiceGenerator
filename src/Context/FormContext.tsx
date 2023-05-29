import { createContext, useState } from "react";

interface FromData {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  website: string;
  owner: string;
}
interface ToData {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  website: string;
  owner: string;
}
interface FormInfo {
  title: string;
  logo: string;
  number: string;
  date: string;
  terms: string;
  notes: string;
}
interface Description {
  description: string;
  rate: number;
  qty: number;
  amount: number;
  tax:Boolean
  taxrate: number;
  additional: string;
}
const initialdescription:Description={
  description:"",
  rate:0,
  qty:0,
  amount:0,
  tax:false,
  taxrate:0,
  additional:""
}
const initialFormInfo: FormInfo = {
  title: "Invoice",
  logo: "",
  number: "",
  date: "",
  terms: "None",
  notes: "",
};
const initialFromData: FromData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipcode: "",
  website: "",
  owner: "",
};
const initialToData: ToData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipcode: "",
  website: "",
  owner: "",
};
interface FormContextType {
  segmentedoptions: string[];
  setSegmentedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedoptions: string;
  setSelectedOptions: React.Dispatch<React.SetStateAction<string>>;
  generateinvoicetype: string;
  setgenerateInvoiceType: React.Dispatch<React.SetStateAction<string>>;
  fromdata: FromData;
  setFromdata: React.Dispatch<React.SetStateAction<FromData>>;
  todata: ToData;
  setTodata: React.Dispatch<React.SetStateAction<ToData>>;
  forminfo: FormInfo;
  setFormInfo: React.Dispatch<React.SetStateAction<FormInfo>>;
  description:Description[], 
  setDescription:React.Dispatch<React.SetStateAction<Description[]>>;
}

export const FormContext = createContext<FormContextType>({
  segmentedoptions: [],
  setSegmentedOptions: () => {},
  selectedoptions: "",
  setSelectedOptions: () => {},
  generateinvoicetype: "",
  setgenerateInvoiceType: () => {},
  fromdata: initialFromData,
  setFromdata: () => {},
  todata: initialToData,
  setTodata: () => {},
  forminfo: initialFormInfo,
  setFormInfo: () => {},
  description:[],
  setDescription: () => {},
});

const FormContextProvider = ({ children }: any) => {
  const [segmentedoptions, setSegmentedOptions] = useState(["Edit", "Preview"]);
  const [selectedoptions, setSelectedOptions] = useState("Edit");
  const [generateinvoicetype, setgenerateInvoiceType] = useState("Email");
  const [fromdata, setFromdata] = useState(initialFromData);
  const [todata, setTodata] = useState(initialToData);
  const [forminfo, setFormInfo] = useState(initialFormInfo);
  const [description, setDescription] = useState([initialdescription]);

  return (
    <FormContext.Provider
      value={{
        segmentedoptions,
        setSegmentedOptions,
        selectedoptions,
        setSelectedOptions,
        generateinvoicetype,
        setgenerateInvoiceType,
        fromdata,
        setFromdata,
        todata,
        setTodata,
        forminfo,
        setFormInfo,
        description, 
        setDescription
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
