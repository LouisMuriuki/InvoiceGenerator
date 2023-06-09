import { createContext, useState, useEffect } from "react";

interface FromData {
  [key: string]: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  website: string;
  country: string;
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
  country: string;
}
interface FormInfo {
  title: string;
  logo: string;
  number: string;
  date: string;
  terms: string;
  notes: string;
  discountType: string;
  discount: number;
  total: number;
  subTotal: number;
  taxLabel: string;
  taxType: string;
  mainTax: number;
  currency: string;
  locale: string;
}
interface Description {
  description: string;
  rate: number;
  qty: number;
  amount: number;
  tax: Boolean;
  taxrate: number;
  additional: string;
}
const initialdescription: Description = {
  description: "",
  rate: undefined as unknown as number,
  qty: 1,
  amount: 0,
  tax: false,
  taxrate: 0,
  additional: "",
};
const initialFormInfo: FormInfo = {
  title: "Invoice",
  logo: "",
  number: "",
  date: "",
  terms: "none",
  notes: "",
  discountType: "none",
  discount: 0,
  taxLabel: "Tax",
  taxType: "none",
  mainTax: 0,
  total: 0,
  subTotal: 0,
  currency: "KES",
  locale: "ebu_KE",
};
const initialFromData: FromData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipcode: "",
  website: "",
  country: "",
};
const initialToData: ToData = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  zipcode: "",
  website: "",
  country: "",
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
  description: Description[];
  setDescription: React.Dispatch<React.SetStateAction<Description[]>>;
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
  description: [],
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

  useEffect(() => {
    const subTotal = description.reduce(
      (acc, num) =>
        acc +
        (num.qty * num.rate + (num.taxrate * (num?.qty * num?.rate)) / 100),
      0
    );

    let total = subTotal * ((100 + forminfo.mainTax) / 100);
    let discount =
      forminfo?.discountType === "amount"
        ? forminfo.discount
        : total * (forminfo.discount / 100);
    total = total - discount;
    setFormInfo((prev) => ({ ...prev, total, subTotal }));
  }, [
    forminfo.discountType,
    forminfo.taxType,
    forminfo.discount,
    forminfo.mainTax,
    description,
  ]);
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
        setDescription,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
