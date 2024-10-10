import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import "./Form.css"; // Ensure this links to the CSS above

const Form = () => {
  const [formData, setFormData] = useState({ mobileNumber: "" });
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [sessionId, setSessionId] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mobileNumber: formData.mobileNumber }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("OTP sent successfully!");
        setSessionId(data.sessionId);
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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mobileNumber: formData.mobileNumber,
            otp,
            sessionId,
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        const userData = {
          username: formData.mobileNumber,
          mobileNumber: formData.mobileNumber,
          password: formData.mobileNumber,
        };

        const registerResponse = await fetch(
          `${process.env.REACT_APP_API_URL}/api/users/register`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          }
        );

        if (registerResponse.ok) {
          const loginPayload = {
            username: formData.mobileNumber,
            password: formData.mobileNumber,
          };
          const loginResponse = await fetch(
            `${process.env.REACT_APP_API_URL}/api/users/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(loginPayload),
            }
          );
          const loginRes = await loginResponse.json();

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
      <div className="right-side">
        <div className="form-container">
          <h4>Schedule a Pickup</h4>
          {loggedInUser ? (
            <div>
              <h4>Welcome Back!</h4>
              <p>You are logged in as {loggedInUser.mobileNumber}</p>
              <button
                onClick={() => navigate("/scraps")}
                className="next-button"
              >
                Go to order
              </button>
            </div>
          ) : (
            <>
              <p className="sub-title">
                {isOtpSent
                  ? "Please enter otp"
                  : "Please enter your mobile number to receive an OTP"}
              </p>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  value={formData.mobileNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, mobileNumber: e.target.value })
                  }
                  disabled={isOtpSent}
                />
              </div>
              {isOtpSent && (
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              )}
              <button
                className="next-button"
                onClick={isOtpSent ? handleOtpVerify : handleSendOtp}
              >
                {isOtpSent ? "Verify OTP" : "Send OTP"}
              </button>
              <div className="support-text">
                <p>
                  Need help? <a href="#">Contact support</a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
