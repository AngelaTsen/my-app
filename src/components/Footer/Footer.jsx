import "./Footer.scss";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export const Footer = () => (
  <footer className="footer">
    <div className="footer__content wrapper">
      <a href="/">
        <img
          className="footer__logo"
          src={require("../../images/logo-white.png")}
          alt="logo"
        />
      </a>

      <div className="footer__contact">
        <p className="footer__contact-info">Contact numbers:</p>
        <p className="footer__contact-info">Phone: 123-456-7890</p>
        <p className="footer__contact-info">Email: example@example.com</p>
      </div>
      <div className="footer__social-icons">
        <a href="#" className="footer__social-icons-icon">
          <FaFacebook color="white" className="footer__social-icons-icon" />
        </a>
        <a href="#" className="footer__social-icons-icon">
          <FaTwitter color="white" className="footer__social-icons-icon" />
        </a>
        <a href="#" className="footer__social-icons-icon">
          <FaInstagram color="white" className="footer__social-icons-icon" />
        </a>
      </div>
    </div>
  </footer>
);
