import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Sharktank from "../Components/SharkTan/Sharktank";
import CardComponents from "../Components/Card/Card";
import Leading_Brands from "../Components/Leading_Brands/Leading_Brands";
import Blogs from "../Components/Blogs/Blogs";
import { FooterContainer } from "../Components/Footer/Footer";
import TestimonialCard from "../Components/Testimonials/Testimonial";
import PollutionInfo from "./PollutionInfo";
import Home from "../Components/Form/Home";

const Homepage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Form /> */}
      <Home />
      <PollutionInfo />
      <Sharktank />
      <CardComponents />
      <Leading_Brands />
      <TestimonialCard />
      <Blogs />
      <FooterContainer />
    </div>
  );
};

export default Homepage;
