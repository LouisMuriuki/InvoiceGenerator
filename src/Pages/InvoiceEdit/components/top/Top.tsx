import { useState, useContext } from "react";
import { Input } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import axios from "axios";
import type { RcFile } from "antd/es/upload/interface";
import { FormContext } from "../../../../Context/FormContext";

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
  const { forminfo, setFormInfo } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  const upload_preset=import.meta.env.VITE_UPLOAD_PRESET
  const cloudinary_name=import.meta.env.VITE_CLOUDINARY_NAME

  const handleChange = async (options: any) => {
    const { onSuccess, onError, file } = options;
    if (!file) {
      console.error("No file selected");
      return;
    }
    setLoading(true);
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", upload_preset);
    axios
      .post(`https://api.cloudinary.com/v1_1/${cloudinary_name}/image/upload`, formData)
      .then((res) => {
        console.log(res);
        onSuccess(res?.data);
        setFormInfo((prev) => ({ ...prev, logo: res?.data?.url }));
      })
      .catch((error) => {
        // Handle error case
        onError(error);
        console.error("Upload failed");
      })
      .finally(() => {
        setLoading(false);
      });
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
            customRequest={handleChange}
            beforeUpload={beforeUpload}
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
