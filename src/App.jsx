import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Mystate from "./context/Data/myState";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import AllProducts from "./pages/AllProducts/AllProducts";
import Cart from "./pages/Cart/Cart";
import NoPage from "./pages/NoPage/NoPage";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productInfo/ProductInfo";
import Dashboard from "./pages/admin/dashBoard/DashBoard";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Mystate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/productinfo/:id" element={<ProductInfo />} />
        <Route
          path="/addproduct"
          element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          }
        />
        <Route
          path="/updateproduct"
          element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          }
        />
        <Route path="/*" element={<NoPage />} />
      </Routes>
      <ToastContainer />
    </Mystate>
  );
};

// users route

export default App;

export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

// admin route

export const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (admin.user.email === "pcexpertatl@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
