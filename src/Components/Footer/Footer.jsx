import React from "react";
import Footer from "./FooterRender2";
import Icon from "../Icons/Icons";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>About Us</Footer.Title>
            <Footer.Link href="#">Story</Footer.Link>
            <Footer.Link href="#">Clients</Footer.Link>
            <Footer.Link href="/admin">Admin</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Marketing</Footer.Link>
            <Footer.Link href="#">Consulting</Footer.Link>
            <Footer.Link href="#">Development</Footer.Link>
            <Footer.Link href="#">Design</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link target="_blank" href="mailto:info.scrappe@gmail.com">
              <div style={{ whiteSpace: "nowrap" }}>
                {" "}
                Email: info.scrappe@gmail.com
              </div>
            </Footer.Link>
            <Footer.Link href="#">Phone: 7702115695</Footer.Link>
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
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
