import React from "react";
// Ant Design
import { Typography, Menu } from "antd";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import useBreakpointHook from "antd/lib/grid/hooks/useBreakpoint";
const MainContent = () => {
  const { Title, Paragraph } = Typography;
  const size = useBreakpointHook();
  return (
    <div style={{ textAlign: "center" }}>
      <Title level={2} style={{ margin: 0 }}>
        Aaron C. Beasley
      </Title>
      <Title level={4} style={{ margin: 0 }}>
        Software Developer
      </Title>
      <Paragraph type="secondary">Web, Mobile, Backend Development</Paragraph>
      <div className="mobile-illustrations">
        {!size.xs && !size.lg && (
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            className="custom-menu"
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Portfolio</Menu.Item>
            <Menu.Item key="3">Blog's</Menu.Item>
            <Menu.Item key="4">About</Menu.Item>
            <Menu.Item key="5">Contact</Menu.Item>
          </Menu>
        )}
        <Person />
        <Phone />
      </div>
    </div>
  );
};

export default MainContent;
