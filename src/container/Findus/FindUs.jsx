import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Contact Us</h1>
      <div className="app__wrapper-content">
      <p className="p__opensans">1010 Dawson Rd, Thunder Bay, ON P7B 5J4</p>
       
      <p className="p__opensans">+1 (807) 767-6999</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Find Us</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>


      </div>
{/* 
      <div className="app__footer-links_contact">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
       
        <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
     
      </div> */}


      
    </div>
   
    <div className="app__wrapper_img">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5292.488426281647!2d-89.25351952371892!3d48.4518436712799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d59216b88e965cb%3A0xb059494ea965ed2a!2sDragon&#39;s%20Den%20Sports%20Bar%20%26%20Grill!5e0!3m2!1sen!2sca!4v1713727040348!5m2!1sen!2sca"
       width="600" height="450" 
      //  style="border:0;"
        // allowfullscreen="" 
        // loading="lazy" 
        // referrerpolicy="no-referrer-when-downgrade"
        >

        </iframe>
     
      {/* <img src={images.findus} alt="finus_img" /> */}
    </div>
  </div>
);

export default FindUs;
