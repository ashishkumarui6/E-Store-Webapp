import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
// import ProductCard from "../../components/productCard/ProductCard";

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Filter />
        {/* <ProductCard /> */}
        <Track />
        <Testimonial />
      </Layout>
    </div>
  );
};

export default Home;
