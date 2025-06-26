import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, Form, Typography, message } from "antd";

const { Title } = Typography;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      message.warning("Iltimos, email va parolni to‘ldiring!");
      return;
    }
    // Bu yerga autentifikatsiya logikasi qo‘shish mumkin
    navigate("/api");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <Title level={2} className="text-center mb-6">
          Kirish
        </Title>
        <Form layout="vertical" onFinish={handleLogin}>
          <Form.Item label="Email" required>
            <Input
              type="email"
              value={email}
              placeholder="Email kiriting"
              onChange={(e) => setEmail(e.target.value)}
              size="large"
            />
          </Form.Item>
          <Form.Item label="Parol" required>
            <Input.Password
              value={password}
              placeholder="Parol kiriting"
              onChange={(e) => setPassword(e.target.value)}
              size="large"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full mt-2"
            size="large"
          >
            Kirish
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
