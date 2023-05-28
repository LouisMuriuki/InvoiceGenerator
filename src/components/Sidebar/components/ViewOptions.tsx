import { Divider, Input, Button } from "antd";
const ViewOptions = () => {
  return (
    <div className="flex flex-col">
      <p className="flex font-semibold">SEND VIA EMAIL</p>
      <Divider className="border border-black mt-1" />
      <Input placeholder="business@email.com" />
      <div className="flex items-center justify-center pt-4 w-full ">
        <Button
          type="primary"
          className="flex items-center w-full justify-center bg-blue-500 text-white"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ViewOptions;
