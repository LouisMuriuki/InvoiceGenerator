import { Divider, Input,message, Button } from "antd";
import { useState } from "react";
const ViewOptions = () => {
  const [email,setEmail]=useState("")
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'I am currently working on this feature',
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Please provide an Email address',
    });
  };
  return (
    <div className="flex flex-col">
      {contextHolder}
      <p className="flex font-semibold">SEND VIA EMAIL</p>
      <Divider className="border border-black mt-1" />
      <Input placeholder="business@email.com" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} />
      <div className="flex items-center justify-center pt-4 w-full ">
        <Button
          type="primary"
          className="flex items-center w-full justify-center bg-blue-500 text-white"
          onClick={email.length>6?success:error}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ViewOptions;
