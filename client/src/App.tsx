import React from "react";
import Loader from "./components/Loader";
import Nav from "./components/Landing/Nav";

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
    <>
      {/* <Loader opacity={loader} /> */}
      <Nav />
    </>
  );
};

export default App;
