import React from "react";
import { Form, Input } from "antd";
interface fromlabels {
  name: string;
  label: string;
  required: boolean;
  message: string;
  visible: boolean;
}
interface tolabels {
  name: string;
  label: string;
  required: boolean;
  message: string;
  visible: boolean;
}
interface FormProps {
  fromlabels?: fromlabels[];
  tolabels?: tolabels[];
}
const FormComponent = ({ fromlabels, tolabels }: FormProps) => {
  return (
    <div className="flex flex-col w-full">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {fromlabels &&
          fromlabels.map((labels, i) => {
            return (
              <div className="px-4" key={i}>
                <Form.Item
                  label={labels.label}
                  name={labels.name}
                  rules={[
                    { required: labels.required, message: labels.message },
                  ]}
                >
                  <Input className="flex w-full" />
                </Form.Item>
              </div>
            );
          })}
        {tolabels &&
          tolabels.map((labels, i) => {
            return (
              <div className="px-4" key={i}>
                <Form.Item
                  label={labels.label}
                  name={labels.name}
                  rules={[
                    { required: labels.required, message: labels.message },
                  ]}
                >
                  <Input className="flex w-full" />
                </Form.Item>
              </div>
            );
          })}
      </Form>
    </div>
  );
};

export default FormComponent;
