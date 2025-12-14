import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="Modern Wholesalers Logo" />
        <p>MODERN WHOLESALERS</p>
      </div>
      
      <ul className="footer-links">
        <li>
          <FaPhone className="footer-icon" />
          <div>
  <h3>Contact Us</h3>
  <p>
    <a href="https://wa.me/254715412841" target="_blank" rel="noopener noreferrer">
      +254 715 412 841
    </a>
  </p>
  <p>
    <a href="https://wa.me/254708985630" target="_blank" rel="noopener noreferrer">
      +254 708 985 630
    </a>
  </p>
</div>

        </li>
        <li>
          <FaMapMarkerAlt className="footer-icon" />
          <div>
            <h3>Find Us</h3>
            <p>Nairobi, Ronald Ngala street</p>
            <p> Royal Palms Mall</p>
            <p>WingA, 2nd floor, shop AF33</p>
            <p>Opposite RNG Plaza</p>
          </div>
        </li>
        <li>
          <FaEnvelope className="footer-icon" />
          <div>
  <h3>Mail Us</h3>
  <p>
    <a href="mailto:modernwholesalers73@gmail.com">modernwholesalers73@gmail.com</a>
  </p>
</div>

        </li>
        <li>
          <FaGlobe className="footer-icon" />
          <div>
            <h3>Website</h3>
            <p><a href="https://modernwholesalers.co.ke" target="_blank" rel="noopener noreferrer">www.modernwholesalers.co.ke</a></p>
          </div>
        </li>
      </ul>
      
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="Instagram" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="Pinterest" />
        </div>
      </div>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
