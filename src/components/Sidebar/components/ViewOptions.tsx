import React from 'react'
import { Divider, Input, Button } from "antd";
const ViewOptions = () => {
  return (
    <div className="flex flex-col gap-1">
    <p className="font-semibold">SEND VIA EMAIL</p>
    <Divider  className="border border-black p-0" />
    <Input />
    <Button type="primary">Send</Button>
  </div>
  )
}

export default ViewOptions