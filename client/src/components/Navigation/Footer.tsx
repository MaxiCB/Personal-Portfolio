import React from "react";
import { Layout, Carousel } from "antd";
// Hooks
import useBreakpointHook from "antd/lib/grid/hooks/useBreakpoint";
import useScrollHook from "../../utils/scrollPositionHook";
// SVG's
import Mouse from "../../assets/mouse.svg";

const Footer: React.FC = () => {
  const size = useBreakpointHook();
  const scroll = useScrollHook();
  const { Footer } = Layout;

  console.log(scroll);

  const recs: String[] = [
    `"Ea hoodie ullamco, knausgaard ugh farm-to-table ut ethical
    distillery 90's post-ironic voluptate typewritter mixtape. Id
    in ex irony." -Unknown Colleague`,
    `"Ea hoodie ullamco, knausgaard ugh farm-to-table ut ethical
    distillery 90's post-ironic voluptate typewritter mixtape. Id
    in ex irony." -Unknown Colleague`,
    `"Ea hoodie ullamco, knausgaard ugh farm-to-table ut ethical
    distillery 90's post-ironic voluptate typewritter mixtape. Id
    in ex irony." -Unknown Colleague`,
    `"Ea hoodie ullamco, knausgaard ugh farm-to-table ut ethical
    distillery 90's post-ironic voluptate typewritter mixtape. Id
    in ex irony." -Unknown Colleague`,
  ];

  return (
    <>
      {size.xs && scroll === 0 ? (
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            position: "fixed",
            fontSize: "20px",
            bottom: 0,
            right: 0,
            left: 0,
          }}
        >
          Swipe Down ⏬
        </Footer>
      ) : size.sm && size.md && scroll < 100 ? (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: "2%",
            width: "25vw",
            textAlign: "center",
            lineHeight: "30px",
            margin: "40px",
            display: "flex",
          }}
        >
          <img
            src={Mouse}
            alt="mouse-illustration"
            style={{ marginRight: "10px" }}
          />
          <div style={{ marginTop: "5px" }}>Scroll Down</div>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "black",
              color: "white",
              position: "fixed",
              bottom: 0,
              right: 0,
              left:  size.lg ? "50vw" :"25vw",
              padding: "20px",
              paddingBottom: 0,
            }}
          >
            <Carousel autoplay>
              {recs.map((rec) => {
                return (
                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        height: "100px",
                        lineHeight: "30px",
                        marginBottom: "20px",
                      }}
                    >
                      {rec}
                    </h3>
                  </div>
                );
              })}
            </Carousel>
          </Footer>
        </div>
      ) : (
        <div>Large</div>
      )}
    </>
  );
};

export default Footer;
