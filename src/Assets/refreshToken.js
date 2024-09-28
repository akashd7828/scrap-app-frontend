import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
export const RefreshAccessToken = async () => {
  const navigate = useNavigate();
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/users/refresh-token`,
      {
        withCredentials: true, // To include the refreshToken cookie
      }
    );
    const { accessToken } = response.data;
    // Store new access token in local storage or state
    let temp = JSON.parse(localStorage.getItem("user"));
    temp["authToken"] = accessToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("user", JSON.stringify(temp));
    window.location.reload();
    return accessToken;
  } catch (err) {
    if (err?.status === 403) {
      localStorage.clear();
      navigate("/login");
    }
  }
  console.error("Failed to refresh access token");
};
