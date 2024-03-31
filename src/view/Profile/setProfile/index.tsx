import React from "react";
import { Layout, Select } from "antd";
import { DatePicker, message, Button, Form, Input } from "antd";
import style from "./setprofile.module.css";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

interface FormValues {
  cid: string;
  gender: string;
  birthday?: string;
  email: string;
  occupation: string;
}

const jwt = sessionStorage.getItem("token");
const phoneNumber = sessionStorage.getItem("userId");

const SetProfile: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: FormValues) => {
    const formDate = { ...values, phoneNumber };

    try {
      const response = await fetch("http://localhost:4000/api/setprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
        body: JSON.stringify(formDate),
      });

      if (response.status === 200) {
        message.success("Profile updated successfully!");
      } else {
        try {
          const data = await response.json(); // 解析 JSON 数据
          const errorMessage = data.error || "Unknown error"; // 获取错误信息
          message.error(`Error updating profile: ${errorMessage}`);
        } catch (error) {
          message.error("Error updating profile: Unknown error"); // 处理解析错误或其他错误
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 403) {
        sessionStorage.clear();
        localStorage.clear();
        navigate("/login");
        console.log("JWT 已过期");
      }
      message.error("An error occurred while updating the profile.");
      console.error("Error updating profile:", error);
    }

    onReset();
  };

  const onReset = () => {
    form.resetFields();
  };

  const goBack = () => {
    navigate("/layout/showprofile");
  };

  return (
    <Content className={style.main}>
      <Layout className={style.layout}>
        <h1 style={{ textAlign: "center" }}>Profile</h1>
        <Form
          form={form}
          onFinish={onFinish}
          style={{ width: "20%", marginTop: "4%" }}
        >
          <Form.Item
            name="cid"
            rules={[
              { required: true, message: "Please input your ChatID!" },
              {
                pattern: /^[a-zA-Z0-9]{8,11}$/,
                message: "ChatID must be 8-11 alphanumeric characters!",
              },
            ]}
            hasFeedback
          >
            <Input placeholder="ChatID" />
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: "Please select your gender!" }]}
            hasFeedback
          >
            <Select placeholder="Select gender">
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item name="birthday">
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { type: "email", message: "Please enter a valid email!" },
              { required: true, message: "Please input your email!" },
            ]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            name="occupation"
            rules={[
              { required: true, message: "Please input your occupation!" },
            ]}
          >
            <Input placeholder="occupation" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="link" style={{ marginLeft: "40%" }} onClick={goBack}>
              Back
            </Button>
          </Form.Item>
        </Form>
      </Layout>
    </Content>
  );
};

export default SetProfile;
