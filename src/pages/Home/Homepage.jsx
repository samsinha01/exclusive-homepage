import React from "react";
import Header from "../../components/Home/Header";
import Nav from "../../components/Home/Nav";
import HeroSection from "../../components/Home/HeroSection";
import Sales from "../../components/Home/Sales";
import Category from "../../components/Home/Category";
import MonthWise from "../../components/Home/MonthWise";
import Banner2 from "../../components/Home/Banner2";
import OurProducts from "../../components/Home/OurProducts";
import Footer from "../../components/Home/Footer";
import Facilities from "../../components/Home/Facilities";
import Featured from "../../components/Home/Featured";

function Homepage() {
  return (
    <>
      <Header />
      <Nav />
      <HeroSection />
      <Sales targetDate={new Date("2025-04-01T00:00:00")} />
      <Category />
      <MonthWise />
      <Banner2 />
      <OurProducts />
      <Featured />
      <Facilities />
      <Footer />
    </>
  );
}

export default Homepage;
