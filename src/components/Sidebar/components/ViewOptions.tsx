
import { Divider, Input, Button } from "antd";
const ViewOptions = () => {
  return (
    <div className="flex flex-col">
    <p className="font-semibold leading-none">SEND VIA EMAIL</p>
    <Divider  className="border leading-none border-black p-0" />
    <Input />
    <Button type="primary">Send</Button>
  </div>
  )
}

export default ViewOptions