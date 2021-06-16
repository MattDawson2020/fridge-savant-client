import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div class='footer'>
        <div class='footer_about'>
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            aliquid, inventore veritatis, a beatae asperiores eveniet ex
            repudiandae voluptatibus tempora, optio nam harum temporibus
            tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nisi recusandae dolore molestiae quis iste.
          </p>
        </div>
        <div class='footer_main'>
          <h3>Quick Start</h3>
          <ul>
            <li>lorem lorem</li>
            <li>lorem</li>
            <li>lorem lorem</li>
            <li>lorem lorem</li>
          </ul>
        </div>
        <div class='footer_right'>
          <div class='footer_links'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faTelegram} />
            <FontAwesomeIcon icon={faPinterest} />
          </div>
        </div>
      </div>
      <div class='copyright'>
        Copyright © 2021 All Rights Reserved by FridgeBoi.
      </div>
    </footer>
  );
};

export default Footer;
