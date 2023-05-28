import { useState, useContext } from "react";
import { Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { FormContext } from "../../../../Context/FormContext";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};
const Top = () => {
  const { forminfo,setFormInfo } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
 

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setFormInfo((prev) => ({ ...prev, logo: url }))
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Add Logo</div>
    </div>
  );
  return (
    <div className="flex flex-row items-center w-full">
      <div className="flex items-center justify-center w-1/2">
        <Input
          placeholder="Invoice"
          className="flex w-[75%]"
          value={forminfo.title}
          size="large"
          onChange={(e) => {
            setFormInfo((prev) => ({ ...prev, title: e.target.value }));
          }}
        />
      </div>
      <div className="flex items-center justify-center w-1/2">
        <div className="flex justify-center">
          {" "}
          {/* Add justify-center class here */}
          <Upload
            name="avatar"
            listType="picture-card"
            className=""
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {forminfo.logo ? (
              <img src={forminfo.logo} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </div>
      </div>
    </div>
  );
};

export default Top;
