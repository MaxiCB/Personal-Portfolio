import React from "react";
import Nav from "./components/Landing/Navigation/Nav";
import Footer from "./components/Landing/Footer/Footer";
import Content from "./components/Landing/Content/Content";

const App = () => {
  const [loader, setLoader] = React.useState(1);
  var timer;

  if (loader > 0) {
    timer = setTimeout(() => {
      setLoader(loader - 0.1);
    }, 250);
  } else {
    clearTimeout(timer);
  }

  return (
    <div className="main">
      <Nav />
      {/* <Content /> */}
      <Footer />
    </div>
  );
};

export default App;
