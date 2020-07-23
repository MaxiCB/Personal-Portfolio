import React from "react";
import Nav from "./components/Landing/Navigation/Nav";
import Footer from "./components/Landing/Footer/Footer";
import Content from "./components/Landing/Content/Content";
import Links from "./components/Landing/Navigation/Links";

const App = () => {
  return (
    <div className="main">
      <Nav />
      <div className="tablet-nav">
        <Links />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
