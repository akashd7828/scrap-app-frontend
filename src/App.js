import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sharktank from "./Components/SharkTan/Sharktank";
// import Card from './Components/Card/Card';
import CardComponents from "./Components/Card/Card";
import Leading_Brands from "./Components/Leading_Brands/Leading_Brands";
import TestimonialCard from "./Components/Testimonials/Testimonial";
import Blogs from "./Components/Blogs/Blogs";
import Testing from "./Components/Testing/Testing";
import Form from "./Components/Form/Form";
// import Footer from './Components/Footer/FooterRender2';
import { FooterContainer } from "./Components/Footer/Footer";
import Form1 from "./Components/Login/Signup";
import Signup from "./Components/Login/Signup";
import Login from "./Components/Login/Login";
import MainRoutes from "./Components/Routes/MainRoutes";
import Multistep from "./Components/Login/Scrap";
// import GridBlurredBackdrop from './Components/ScrapCards/ScrapCards';
import LargeWithLogoCentered from "./Components/Footer2/Footer";
import SocialProfileWithImage from "./Components/ScrapCards/ScrapCards";
import MainAdmin from "./Admin/Admin";
import Homepage from "./Homepage/Homepage";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const element = document.getElementsByClassName(".tooltip_wrapper__vA_JM");
    console.log("@@ele", element);
    if (element) {
      element.style.display = "none";
    }
  }, []);
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />

      {/* <Navbar/>
      <Form/>
      <Sharktank/>
      <CardComponents/>
      <Leading_Brands/>
      <TestimonialCard/>
      <Blogs/> */}
      {/* <Testing/> */}
      {/* <FooterContainer/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Multistep/> */}
      {/* <GridBlurredBackdrop/> */}
      {/* <LargeWithLogoCentered/> */}
      {/* <SocialProfileWithImage/> */}
      {/* <MainAdmin/> */}
      {/* <Homepage/> */}
    </div>
  );
}

export default App;
