import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Users from "../pages/Users";
import Students from "../pages/Students";
import Post from "../pages/Post";
import Products from "../pages/Products";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Users", "1", <TeamOutlined />),
  getItem("Students", "2", <TeamOutlined />),
  getItem("Posts", "sub1", <UserOutlined />),
  getItem("Products", "sub2", <TeamOutlined />),
];

function SideBar() {
  const [selectedKey, setSelectedKey] = useState("1");

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="text-white text-center text-lg py-4 font-semibold">
          Home
        </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(e) => setSelectedKey(e.key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }} />
          <div
            style={{
              padding: "24px",
              minHeight: "500px",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {selectedKey === "1" && <Users />}
            {selectedKey === "2" && <Students />}
            {selectedKey === "sub1" && <Post />}
            {selectedKey === "sub2" && <Products />}
            {selectedKey === "9" && <div>Files content</div>}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default SideBar;
