import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-con container">
      <div className="footer-list">
        <ul className="footer-ul">
          <li className="footer-items">FAQ</li>
          <li className="footer-items">Investor Relations</li>
          <li className="footer-items">Ways To Watch</li>
          <li className="footer-items">Corporate ZInformation</li>
          <li className="footer-items">Netflix Originals</li>
        </ul>
      </div>

      <div className="footer-list">
        <ul className="footer-ul">
          <li className="footer-items">Help Center</li>
          <li className="footer-items">Jobs</li>
          <li className="footer-items">Terms Of Use</li>
          <li className="footer-items">Contact Us</li>
        </ul>
      </div>
      <div className="footer-list">
        <ul className="footer-ul">
          <li className="footer-items">Account</li>
          <li className="footer-items">Redeem Gift Cards</li>
          <li className="footer-items">Privacy</li>
          <li className="footer-items">Speed Test</li>
        </ul>
      </div>
      <div className="footer-list">
        <ul className="footer-ul">
          <li className="footer-items">Media center</li>
          <li className="footer-items">Buy Gift Cards</li>
          <li className="footer-items">Cookie Prefrences</li>
          <li className="footer-items">Legal Notices</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
