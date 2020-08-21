import React from "react";
// Ant Design
import { Layout } from "antd";
// Style
import NavigationBar from "./components/Navigation/NavigationBar";
import MainContent from "./components/Content/MainContent";
import Footer from "./components/Navigation/Footer";

const App = () => {
  return (
    <Layout className="app">
      <NavigationBar />
      <MainContent />
      <Footer />
    </Layout>
  );
};

export default App;
