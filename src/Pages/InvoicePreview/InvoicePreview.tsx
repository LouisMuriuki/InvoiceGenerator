import { useContext} from "react";
import { FormContext } from "../../Context/FormContext";
import { Divider } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/en";

const InvoicePreview = () => {
  let number = [0];
  const { forminfo, todata, fromdata, description } = useContext(FormContext);
  number = forminfo?.terms === "none" ? [0] : (forminfo?.terms?.match(/\d+/g) || []).map(Number);
  console.log(number);
  const formattedDate = dayjs(forminfo?.date).format("dddd, MMMM DD, YYYY");
  const formattedDueDate = dayjs(forminfo?.date)
    .add(+number[0], "day")
    .format("dddd, MMMM DD, YYYY");

  

  return (
    <div className="flex flex-col bg-white w-full h-auto p-4 md:p-10 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-start">
          <img
            src={forminfo.logo}
            alt="Invoice logo"
            className="w-[80px] md:w-[120px] mr-4 flex items-start "
          />
        </div>
        <div>
          <p className="text-3xl font-semibold mb-3">{forminfo.title}</p>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="text-lg mb-1 font-bold">{fromdata.name}</h2>
        <p className="mb-1">{fromdata.email}</p>
        <p className="mb-1">{fromdata.phone}</p>
        <p className="mb-1">{fromdata.address}</p>
        <p className="mb-1">{fromdata.city}</p>
        <p className="mb-1">{fromdata.website}</p>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-1 w-full dark:bg-gray-700" />
      <div className="flex justify-between mb-6">
        <div className="flex flex-col">
          <h3 className="text-base font-bold mb-2">BILLED TO:</h3>

          <div>
            <p className="mb-1 font-bold">{todata?.name}</p>
            <p className="mb-1">{todata?.phone}</p>
            <p className="mb-1">{todata?.email}</p>
            <p className="mb-1">{todata?.address}</p>
            <p className="mb-1">{todata?.city}</p>
            <p className="mb-1">{todata?.website}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex mb-1">
            <h1 className="font-bold mr-2">INVOICE NUMBER:</h1>
            <p className="text-gray-600">{forminfo.number}</p>
          </div>
          <div className="flex mb-1">
            <h3 className="font-bold mr-2">INVOICE DATE:</h3>
            <p>{forminfo.date ? formattedDate : null}</p>
          </div>
          <div className="flex mb-1">
            <h3 className="font-bold mr-2">DUE DATE:</h3>
            <p>{forminfo.date ? formattedDueDate : null}</p>
          </div>
        </div>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-1 w-full dark:bg-gray-700" />
      <div className="border border-y-stone-950 border-x-white  grid grid-cols-12 p-1 mb-3">
        <div className="col-span-6">
          <h5 className="font-bold">Description</h5>
        </div>
        <div className="col-span-2">
          <h5 className="flex items-center justify-end font-bold">Quantity</h5>
        </div>
        <div className="col-span-2">
          <h5 className="flex items-center justify-end font-bold">
            Price/Rate
          </h5>
        </div>

        <div className="col-span-2">
          <h5 className="flex items-center justify-end font-bold">Amount</h5>
        </div>
      </div>
      {description.map((desc, i) => {
        return (
          <div key={i}>
            <div className="grid grid-cols-12 gap-1">
              <div className="col-span-6">
                <div className="grid-rows-2">
                  <p>{desc?.description}</p>
                  <p>{desc?.additional}</p>
                </div>
              </div>
              <div className="flex  justify-end col-span-2">
                <p>{desc?.qty}</p>
              </div>
              <div className="flex  justify-end col-span-2">
                <p>{(desc?.rate).toLocaleString()}</p>
              </div>
              <div className="flex  justify-end col-span-2">
                <h5>{(desc?.qty * desc?.rate).toLocaleString()}</h5>
              </div>
            </div>{" "}
            <Divider dashed />
          </div>
        );
      })}
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-8"></div>
        <div className="flex justify-end col-span-2">
          <div className="grid-rows-2">
            <p>Sub-total</p>
            <p>
              {forminfo.taxLabel} ({}%)
            </p>
            <p>Discount</p>
            <p>Total</p>
          </div>
        </div>
        <div className="flex  justify-end col-span-2">
          <div className="grid-rows-2">
            <p>KSH {forminfo.subTotal}</p>
            <p>KSH {`${forminfo.mainTax}.00%`}</p>
            <p>
              KSH{" "}
              {forminfo?.discountType === "amount"
                ? forminfo.discount
                : `${forminfo.discount}.00%`}
            </p>
            <p className="font-bold">KSH {forminfo.total?.toLocaleString()}</p>
          </div>
        </div>
      </div>
      <div className=" flex w-full my-20">{forminfo.notes}</div>
      <div className="flex flex-col justify-center items-center font-bold">
        <p className="mb-4">
          Kindly pay your invoice{" "}
          {forminfo.terms === "none" ? "Today" : `within ${forminfo.terms} `}
        </p>
        <p className="mb-2">Thank you !</p>
      </div>
    </div>
  );
};

export default InvoicePreview;
