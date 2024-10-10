import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import Homepage from "../../Homepage/Homepage";
import Multistep from "../Login/Scrap";
import ScrapCards from "../ScrapCards/ScrapCards";
import ForgotPassword from "../Login/ForgotPassword";
import AboutUs from "../ExtraPages/AboutUs";
import ScrapRates from "../ExtraPages/ScrapRates";
import PrivateRoute from "./PivateRoutes";
import RVM from "../ExtraPages/Rvm";
import Form from "../Form/Form";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Homepage />} />
      <Route path="/schedule-pickup" element={<Form />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        }
      />
      <Route
        path="/scraps"
        element={
          <PrivateRoute>
            <Multistep />
          </PrivateRoute>
        }
      />
      <Route
        path="/scrapcard"
        element={
          <PrivateRoute>
            <ScrapCards />
          </PrivateRoute>
        }
      />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/rvm" element={<RVM />} />
      <Route path="/scrap-rates" element={<ScrapRates />} />
      <Route path="*" element={<Homepage />} />
      <Route path="" element={<Homepage />} />
    </Routes>
  );
};

export default MainRoutes;
