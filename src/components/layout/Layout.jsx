import React from "react";
import Nvabar from "../Navbar/Nvabar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Nvabar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
