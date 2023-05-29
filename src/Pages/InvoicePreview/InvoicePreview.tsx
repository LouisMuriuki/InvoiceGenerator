import { useContext } from "react";
import { FormContext } from "../../Context/FormContext";

const InvoicePreview = () => {
  const { forminfo, todata, fromdata } = useContext(FormContext);
  return (
    <div className="flex flex-col bg-white w-full h-auto p-4 md:p-10 shadow-md">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-start">
          <img
            src={""}
            alt="Invoice logo"
            className="w-[80px] md:w-[120px] mr-4 flex items-start "
          />
        </div>
        <div>
          <p className="text-3xl font-semibold mb-3">{forminfo.title}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-base font-bold">{fromdata.name}</h2>
        <p>{fromdata.name}</p>
        <p>{fromdata.email}</p>
        <p>{fromdata.phone}</p>
        <p>{`${(fromdata.address, fromdata.zipcode)}`}</p>
        <p>{fromdata.city}</p>
        <p>{fromdata.website}</p>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-1 w-full dark:bg-gray-700" />
      <div>
        <h3 className="text-base font-bold mb-2">BILLED TO</h3>
      </div>
      <div className="flex justify-between mb-6">
        <div>
          <p className="mb-2 font-bold">{todata?.owner}</p>

          <p className="mb-2">{todata?.email}</p>
          <p className="mb-2">{todata?.phone}</p>
          <p className="mb-2">{` ${(todata?.address, todata.zipcode)}`}</p>
          <p className="mb-2">{todata?.city}</p>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="text-xs font-bold mr-2">INVOICE NUMBER:</h1>
            <p className="text-gray-600">{forminfo.number}</p>
          </div>
          <div className="flex items-center">
            <h3 className="text-xs font-bold mr-2">INVOICE DATE:</h3>
            <p>{forminfo.date}</p>
          </div>
          <div className="flex items-center">
            <h3 className="text-xs font-bold mr-2">DUE DATE:</h3>
            <p>{}</p>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-1 w-full dark:bg-gray-700" />
      <table className="w-full mb-6">
        <thead>
          <tr>
            <th className="text-left  font-bold">PACKAGE</th>
            <th className="text-left  font-bold">PRICE</th>
            <th className="text-left  font-bold">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-end">
        <div className="md:w-1/3 pl-12">
          <table className="w-full mb-6">
            <tbody>
              <tr>
                <td className="">Sub-total</td>
                <td className=" pr-8">KSH {}</td>
              </tr>
              <tr>
                <td className="">Tax ({}%)</td>
                <td className=" pr-8">KSH {0}</td>
              </tr>
              <tr>
                <td className="">Total</td>
                <td className="font-bold">KSH {}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p>
          Kindly pay your invoice within{forminfo.terms}
          days.
        </p>
        <p className="mb-2">Thank you !</p>
        <p>MGENI KARIBU</p>
      </div>
    </div>
  );
};

export default InvoicePreview;
