import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form, notification } from "antd";
import { Notification } from "../../utils/Notification";
function SignIn() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const { username, pass } = values;
    if (username === "admin" && pass === "admin01") {
      navigate("/api");
    } else {
      Notification()
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[30%] b[300px]">
        <h2 className="text-center text-[30px] my-4">Sign In</h2>

        <Form onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="username..." size="large" />
          </Form.Item>
          <Form.Item
            name="pass"
            rules={[{ required: true, message: "Please input your pass!" }]}
          >
            <Input.Password placeholder="password..." size="large" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
