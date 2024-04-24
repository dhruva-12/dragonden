import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">1010 Dawson Rd, Thunder Bay, ON P7B 5J4</p>
        <p className="p__opensans">+1 (807) 767-6999</p>
        <p className="p__opensans">: (807) 767-6999</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />34
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Dragon's Den Sports Bar & Grill. All Rights reserved.</p>
    </div>
    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdragonsdensbar%2F%3Futm_source%3Drestaurantguru%26utm_medium%3Dreferral&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
     width="340" height="500" 
    //  style="border:none;overflow:hidden" 
    //  scrolling="no" frameborder="0" allowfullscreen="true" 
     allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

     </iframe>
  </div>
);

export default Footer;
