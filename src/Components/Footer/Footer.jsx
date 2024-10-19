import React from "react";
import Footer from "./FooterRender2";
import Icon from "../Icons/Icons";
import { useNavigate } from "react-router-dom";

export function FooterContainer() {
  const navigate = useNavigate();

  const redirectToWhyUs = () => {
    navigate("/about-us");
  };

  const redirectToRvm = () => {
    navigate("/rvm");
  };
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link
              style={{ cursor: "pointer" }}
              onClick={redirectToWhyUs}
            >
              Story
            </Footer.Link>
            <Footer.Link
              style={{ cursor: "pointer" }}
              onClick={redirectToWhyUs}
            >
              Clients
            </Footer.Link>
            <Footer.Link
              style={{ cursor: "pointer" }}
              onClick={redirectToWhyUs}
            >
              Admin
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link style={{ cursor: "pointer" }} onClick={redirectToRvm}>
              Marketing
            </Footer.Link>
            <Footer.Link style={{ cursor: "pointer" }} onClick={redirectToRvm}>
              Consulting
            </Footer.Link>
            <Footer.Link style={{ cursor: "pointer" }} onClick={redirectToRvm}>
              Development
            </Footer.Link>
            <Footer.Link style={{ cursor: "pointer" }} onClick={redirectToRvm}>
              Design
            </Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="https://www.facebook.com/">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link
              target="_blank"
              href="https://www.instagram.com/dharb_innoventures?igsh=MTQycXZvMndwZ3gxcQ=="
            >
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link target="_blank" href="mailto:info.scrappe@gmail.com">
              <Icon className="fab fa-youtube" />
              Mail Us
            </Footer.Link>
            <Footer.Link
              target="_blank"
              href="https://www.linkedin.com/company/dharb-innoventures-private-limited-bharat-plasti-pay/?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3B8FS8qtBPTpunoUI5zw8NGg%3D%3D"
            >
              <Icon className="fab fa-twitter" />
              LinkedIn
            </Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link
              style={{ textWrap: "nowrap" }}
              target="_blank"
              href="mailto:info.scrappe@gmail.com"
            >
              <div> Email: info.scrappe@gmail.com</div>
            </Footer.Link>
            <Footer.Link href="#">Phone: 7702115695</Footer.Link>
            <Footer.Link href="#">
              <div style={{ textWrap: "nowrap" }}>
                Address: A-10 Godavari Homes <br /> Suchitra Quthbullapur
                Hyderabad <br />
                Telangana-500067 India
              </div>
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
