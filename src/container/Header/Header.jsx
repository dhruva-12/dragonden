import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
// @ts-ignore
import Menu from '../../assets/Mike_rest-menu.pdf';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new thrill" />
      <h1 className="app__header-h1">Taste Victory, Savor Grill Flavor</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Experience the best sports viewing atmosphere and delicious food at Den Sports Bar & Grill. Join us for great food, drinks, and live entertainment! </p>
      <button type="button" className="custom__button">
      <a href={Menu} target="_blank"
                    rel="noreferrer"> 
                   Explore Menu
                </a> 
                </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.bar} alt="header_img" />
    </div>
  </div>
);

export default Header;
