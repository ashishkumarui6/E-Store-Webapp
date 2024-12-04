import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import ProductCard from "../../components/productCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addTocart, deleteFromCart } from "../../redux/cartSlice";

const Home = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.cart);

  console.log(cartItem);
  const addCart = () => {
    dispatch(addTocart("shirt"));
  };

  const deleteCart = () => {
    dispatch(deleteFromCart("shirt"));
  };

  return (
    <div>
      <Layout>
        <div className="flex justify-center gap-5">
          <button className="bg-gray-300 p-5" onClick={() => addCart()}>
            Add
          </button>
          <button className="bg-gray-300 p-5" onClick={() => deleteCart()}>
            Delete
          </button>
        </div>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
        <Testimonial />
      </Layout>
    </div>
  );
};

export default Home;
