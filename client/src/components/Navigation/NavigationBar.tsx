import React from "react";
// Ant Design
import { Layout, Menu, Popover, Drawer } from "antd";
import {
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";
// React Icons
import { Menu as MenuIcon } from "react-feather";
import useBreakpointHook from "antd/lib/grid/hooks/useBreakpoint";

const NavigationBar = () => {
  const { Header } = Layout;

  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const size = useBreakpointHook();

  return (
    <>
      {size.xs ? (
        <>
          <Header
            style={{
              backgroundColor: "#fff",
            }}
          >
            <div className="mobile-menu">
              <MenuIcon
                style={{ float: "left" }}
                size={32}
                onClick={handleMenu}
              />
            </div>
            <div className="nav-logo">AaronCB</div>{" "}
          </Header>
          <div className="mobile-icons">
            <LinkedinOutlined style={{ fontSize: "24px" }} />
            <InstagramOutlined style={{ fontSize: "24px" }} />
            <GithubOutlined style={{ fontSize: "24px" }} />
            <TwitterOutlined style={{ fontSize: "24px" }} />
          </div>
          <Drawer
            title="Pages"
            placement={"left"}
            closable={true}
            onClose={handleMenu}
            visible={menuOpen}
            key={"left"}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              defaultSelectedKeys={["0"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              style={{ width: "100%" }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Portfolio</Menu.Item>
              <Menu.Item key="3">Blog's</Menu.Item>
              <Menu.Item key="4">About</Menu.Item>
              <Menu.Item key="5">Contact</Menu.Item>
            </Menu>
          </Drawer>
        </>
      ) : size.sm && size.md && !size.lg ? (
        <Header style={{ backgroundColor: "#fff" }}>
          <div className="nav-logo" style={{ left: 0 }}>
            AaronCB
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            style={{ position: "absolute", right: 0 }}
          >
            <Menu.Item key="1">
              <Popover
                placement="bottom"
                title={"View my LinkedIn Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                }
                trigger="click"
              >
                <LinkedinOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
            <Menu.Item key="2">
              <Popover
                placement="bottom"
                title={"View my Instagram Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram Profile
                  </a>
                }
                trigger="click"
              >
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
            <Menu.Item key="3">
              <Popover
                placement="bottom"
                title={"View my Github Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Profile
                  </a>
                }
                trigger="click"
              >
                <GithubOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
            <Menu.Item key="4">
              <Popover
                placement="bottom"
                title={"View my Twitter Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter Profile
                  </a>
                }
                trigger="click"
              >
                <TwitterOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
          </Menu>
        </Header>
      ) : (
        <Header style={{ backgroundColor: "#fff" }}>
          <div className="nav-logo" style={{ left: 0 }}>
            AaronCB
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Portfolio</Menu.Item>
              <Menu.Item key="3">Blog's</Menu.Item>
              <Menu.Item key="4">About</Menu.Item>
              <Menu.Item key="5">Contact</Menu.Item>
            </Menu>
          </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={["0"]}
            style={{ position: "absolute", right: 0, top: 0 }}
          >
            <Menu.Item key="1">
              <Popover
                placement="bottom"
                title={"View my LinkedIn Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                }
                trigger="click"
              >
                <LinkedinOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
            <Menu.Item key="2">
              <Popover
                placement="bottom"
                title={"View my Instagram Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram Profile
                  </a>
                }
                trigger="click"
              >
                <InstagramOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
            <Menu.Item key="3">
              <Popover
                placement="bottom"
                title={"View my Github Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Profile
                  </a>
                }
                trigger="click"
              >
                <GithubOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
            <Menu.Item key="4">
              <Popover
                placement="bottom"
                title={"View my Twitter Here"}
                content={
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter Profile
                  </a>
                }
                trigger="click"
              >
                <TwitterOutlined style={{ fontSize: "24px" }} />
              </Popover>
            </Menu.Item>
          </Menu>
        </Header>
      )}
    </>
  );
};

export default NavigationBar;
