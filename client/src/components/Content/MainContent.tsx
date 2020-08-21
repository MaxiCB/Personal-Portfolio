import React from "react";
// Ant Design
import { Typography, Menu } from "antd";
import { UpCircleFilled, DownCircleFilled } from "@ant-design/icons";
import { ReactComponent as Person } from "../../assets/person.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { ReactComponent as Server } from "../../assets/server.svg";
import { ReactComponent as Webapp } from "../../assets/webapp.svg";
import useBreakpointHook from "antd/lib/grid/hooks/useBreakpoint";
const MainContent = () => {
  const { Title, Paragraph } = Typography;
  const size = useBreakpointHook();
  return (
    <>
      {size.xs || (size.sm && size.md && !size.lg) ? (
        <div style={{ textAlign: "center" }}>
          <Title level={2} style={{ margin: 0 }}>
            Aaron C. Beasley
          </Title>
          <Title level={4} style={{ margin: 0 }}>
            Software Developer
          </Title>
          <Paragraph type="secondary">
            Web, Mobile, Backend Development
          </Paragraph>
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
      ) : (
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <Title level={1} style={{ margin: 0 }}>
                Aaron C. Beasley
              </Title>
              <Title level={3} style={{ margin: 0 }}>
                Software Developer
              </Title>
              <Title level={4} style={{ margin: 0 }}>
                Web, Mobile, Backend Development
              </Title>
            </div>
          </div>
          <div
            style={{
              width: "50%",
            }}
          >
            <div className="mobile-illustrations" style={{ marginTop: "5%" }}>
              <Person />
              <div style={{ width: "330px" }}>
                <Webapp />
                <Server />
              </div>
              <Phone />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;
