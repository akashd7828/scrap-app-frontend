import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Form.css";
import chotu from "../../Assets/chotu.png";
import Cookies from "js-cookie";

const Form = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
  });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [sessionId, setSessionId] = useState(""); // Store the OTP session ID
  const [loggedInUser, setLoggedInUser] = useState(null); // Store the logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(JSON.parse(user));
    }
  }, []);

  const handleSendOtp = async () => {
    if (!formData.mobileNumber) {
      toast.error("Please enter a valid mobile number");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/otp/send-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobileNumber: formData.mobileNumber }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("OTP sent successfully!");
        setSessionId(data.sessionId); // Assuming the session ID is returned
        setIsOtpSent(true);
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Error sending OTP. Please try again.");
      console.error("Error:", error);
    }
  };

  const handleOtpVerify = async () => {
    if (!otp) {
      toast.error("Please enter the OTP");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/otp/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobileNumber: formData.mobileNumber,
            otp,
            sessionId,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        // After OTP verification, register the user
        const userData = {
          username: formData.mobileNumber,
          mobileNumber: formData.mobileNumber,
          password: formData.mobileNumber, // Assuming password is the mobile number for now
        };

        let registerResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/users/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }
        );

        await registerResponse.json();
        if (registerResponse.ok) {
          const loginPayload = {
            username: formData.mobileNumber,
            password: formData.mobileNumber,
          };
          let loginResponse = await fetch(
            `${process.env.REACT_APP_API_URL}/api/users/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(loginPayload),
            }
          );
          let loginRes = await loginResponse.json();

          if (loginResponse.ok) {
            toast.success("User registered successfully!");
            setFormData({ mobileNumber: "" });
            setOtp("");
            setIsOtpSent(false);
            let user = JSON.parse(JSON.stringify(loginRes?.user));
            user["authToken"] = loginRes?.accessToken;
            localStorage.setItem("user", JSON.stringify(loginRes?.user));
            Cookies.set("authToken", loginRes?.accessToken, { expires: 7 });
            navigate("/scraps");
            window.location.reload();
          } else {
            toast.error(loginRes.message || "Failed to register user");
          }
        } else {
          toast.error("Failed to register user");
        }
      } else {
        toast.error(data.message || "Incorrect OTP");
      }
    } catch (error) {
      toast.error("Error verifying OTP. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="container">
      <div className="left-side">
        <h1>
          Sell your recyclables <br />
          online with <span className="highlight">ScrapPe!</span>
        </h1>
        <div className="sub-title">
          <span>Paper - Plastics - Metals - Appliances</span>
        </div>
        <div className="sub-title">
          <span>
            You can also download the{" "}
            <b style={{ color: "green", cursor: "pointer" }}>ScrapPe App</b>
          </span>
        </div>
        <img src={chotu} alt="Scrap Uncle Banner" className="banner-img" />
      </div>

      <div className="right-side">
        <div className="form-container-large">
          {" "}
          {/* Updated for larger form */}
          {loggedInUser ? (
            // If user is already logged in
            <div style={{ lineHeight: "2rem" }}>
              <h4>
                Welcome Back, <strong>{loggedInUser.username}!</strong>
              </h4>
              <p>You can now post a scrap order by clicking below:</p>
              <div>
                <button
                  className="next-button"
                  onClick={() => navigate("/scraps")}
                >
                  Go to Scraps
                </button>
              </div>
            </div>
          ) : (
            <>
              <h4>{!isOtpSent ? "Schedule a Pickup" : "Enter OTP"}</h4>

              {!isOtpSent ? (
                <>
                  <p>Mobile</p>
                  <div className="input-box">
                    <span>+91</span>
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                      value={formData.mobileNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          mobileNumber: e.target.value,
                        })
                      }
                    />
                  </div>
                  <button className="next-button" onClick={handleSendOtp}>
                    SEND OTP
                  </button>
                </>
              ) : (
                <>
                  <p>OTP</p>
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </div>
                  <button className="next-button" onClick={handleOtpVerify}>
                    VERIFY OTP
                  </button>
                </>
              )}
            </>
          )}
          <p className="support-text">
            Facing Problems? Call us at{" "}
            <a href="tel:+917702115695">+917702115695</a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
