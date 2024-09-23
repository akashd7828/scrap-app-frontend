import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/scrappe2.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // State to hold the user data
  const navbarRef = useRef(null); // Create a ref for the navbar

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const datamow = JSON.parse(localStorage.getItem("user"));
  // console.log("datamow",datamow)
  useEffect(() => {
    // Check localStorage for user data
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user state if data exists
    }

    console.log(user);
    // Add event listener to detect clicks outside of the navbar
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null); // Clear user state after logging out
    window.location.reload();
  };

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-content">
        <a className="navbar-brand" href="/">
          <img
            className="local_header_logo"
            src={logo}
            alt="Scrappe - Recycling Made Easy"
          />
        </a>

        {/* Burger menu icon */}
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>

        {/* Navbar Items */}
        <div className={`navbar-items ${isOpen ? "open" : ""}`}>
          <ul className="header_ul" onClick={() => setIsOpen(false)}>
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            <Link to={"/about-us"}>
              <li className="nav-item">Why Us?</li>
            </Link>
            <Link to={"/scrap-rates"}>
              <li className="nav-item">Scrap Rates</li>
            </Link>
            {datamow && (
              <Link to={"/scraps"}>
                <li className="nav-item">Add Order</li>
              </Link>
            )}

            {datamow && (
              <Link to={"/scrapcard"}>
                <li className="nav-item">Orders</li>
              </Link>
            )}
          </ul>

          {/* Move Buttons Inside Navbar Items for Mobile */}
          {isOpen && !user && (
            <div className="navbar-end-mobile" onClick={() => setIsOpen(false)}>
              <button className="navbar-btn schedule-btn">
                <Link to="/register">Register</Link>
              </button>
              <button className="navbar-btn login-btn">
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </div>

        {/* Right-side buttons for desktop */}
        <div className="navbar-end">
          {!user ? (
            <>
              <button className="navbar-btn schedule-btn">
                <Link to="/register">Register</Link>
              </button>
              <button className="navbar-btn login-btn">
                <Link to="/login">Login</Link>
              </button>
            </>
          ) : (
            <>
              <span className="navbar-user">Hello, {datamow.username}</span>
              <button className="navbar-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
