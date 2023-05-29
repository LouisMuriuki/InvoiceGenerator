import { Divider, Button } from "antd";
const Download = () => {
  return (
    <div className="flex flex-col">
      <p className="flex font-semibold">DOWNLOAD PDF</p>
      <Divider className="border border-black mt-1" />
      <p>Download this Invoice as pdf document</p>
      <div className="flex items-center justify-center pt-4 w-full ">
        <Button
          type="primary"
          className="flex items-center w-full justify-center bg-blue-500 text-white"
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Download;
