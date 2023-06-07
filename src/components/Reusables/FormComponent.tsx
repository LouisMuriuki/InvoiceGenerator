import { useContext } from "react";
import { Form, Input } from "antd";
import { FormContext } from "../../Context/FormContext";
interface fromlabels {
  name: string;
  label: string;
  required: boolean;
  message: string;
  placeholder: string;
  visible: boolean;
}
interface tolabels {
  name: string;
  label: string;
  required: boolean;
  message: string;
  placeholder: string;
  visible: boolean;
}
interface FormProps {
  fromlabels?: fromlabels[];
  tolabels?: tolabels[];
}
const FormComponent = ({ fromlabels, tolabels }: FormProps) => {
  const { fromdata, todata, setFromdata, setTodata } = useContext(FormContext);

  const FromChange = (name: any, value: any) => {
    setFromdata((prev) => ({ ...prev, [name]: value }));
  };
  const ToChange = (name: any, value: any) => {
    setTodata((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col w-full">
      <Form
        name={fromlabels ? "From" : "To"}
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
              <div key={i}>
                <Form.Item
                  label={labels.label}
                  name={labels.name}
                  rules={[
                    { required: labels.required, message: labels.message },
                  ]}
                >
                  <Input
                    placeholder={labels.placeholder}
                    className="flex w-full"
                    defaultValue={fromdata &&fromdata[labels?.name]}
                    onChange={(e) => {
                      FromChange(labels.name, e.target.value);
                    }}
                  />
                </Form.Item>
              </div>
            );
          })}
        {tolabels &&
          tolabels.map((labels, i) => {
            return (
              <div key={i}>
                <Form.Item
                  label={labels.label}
                  name={labels.name}
                  rules={[
                    { required: labels.required, message: labels.message },
                  ]}
                >
                  <Input
                    placeholder={labels.placeholder}
                    className="flex w-full"
                    defaultValue={todata &&todata[labels?.name]}
                    onChange={(e) => {
                      ToChange(labels.name, e.target.value);
                    }}
                  />
                </Form.Item>
              </div>
            );
          })}
      </Form>
    </div>
  );
};

export default FormComponent;
