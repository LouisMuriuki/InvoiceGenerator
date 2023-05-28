import React from "react";
import { Form, Input } from "antd";
interface fromlabels{
   name: string;
  label: string;
  required: boolean;
  message: string;
  visible: boolean;
}
interface tolabels{
   name: string;
  label: string;
  required: boolean;
  message: string;
  visible: boolean;
}
interface FormProps {
  fromlabels?:fromlabels[]
  tolabels?:tolabels[]
 
}
const FormComponent = ({ fromlabels,tolabels }: FormProps) => {
  return (
    <div className="flex flex-col">
      <Form
        name="basic"
        labelCol={{ span: 9 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {fromlabels&&fromlabels.map((labels) => {
            return (
              <Form.Item
                label={labels.label}
                name={labels.name}
                rules={[
                  { required: labels.required, message: labels.message },
                ]}
                
              >
                <Input />
              </Form.Item>
            );
          })}
        {tolabels&&tolabels.map((labels) => {
            return (
              <Form.Item
                label={labels.label}
                name={labels.name}
                rules={[
                  { required: labels.required, message: labels.message },
                ]}
                
              >
                <Input />
              </Form.Item>
            );
          })}
      </Form>
    </div>
  );
};

export default FormComponent;
