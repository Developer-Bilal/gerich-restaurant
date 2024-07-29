import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 5th St New York</p>
        <p className="p__opensans">+123 123 123</p>
        <p className="p__opensans">+111 123 123</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer-logo" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          non similique ipsam excepturi autem cum.
        </p>
        <img
          src={images.spoon}
          alt="spoon-image"
          className="spoon__img"
          style={{ marginTop: "50px" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon-Fri,: </p>
        <p className="p__opensans">8AM - 12AM</p>
        <p className="p__opensans">Sat - Sun : </p>
        <p className="p__opensans">7AM - 11PM</p>
      </div>
    </div>
    <div className="footer__cpyright">
      <p className="p__opensans">2024 Gerich. All rights reserved</p>
    </div>
  </div>
);

export default Footer;
