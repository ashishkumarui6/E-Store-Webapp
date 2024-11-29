import React from "react";
import { Route, Routes } from "react-router";
import Mystate from "./context/Data/Mystate";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import DashBoard from "./pages/DashBoard/DashBoard";
import AllProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";

const App = () => {
  return (
    <Mystate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/*" element={<NoPage />} />
      </Routes>
    </Mystate>
  );
};

export default App;
