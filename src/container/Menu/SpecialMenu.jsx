import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  // <div className="app__bg app__wrapper section__padding" id="events">
  //   <div className="app__specialMenu-title">
      
  //     <h1 className="headtext__cormorant">Events & Shows</h1>

  //     <SubHeading title="All the trending events and shows" />
  //   </div>

  //   {/* <div className="app__wrapper_img"> */}
  //   <div className="app__wrapper_info">
  //        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdragonsdensbar%2F%3Futm_source%3Drestaurantguru%26utm_medium%3Dreferral&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
  //        height={500}
  //       //  width={450}
         
  //   //  style={{border:"none",overflow:"hidden" }}
  //   //  scrolling="no" frameborder="0" allowfullscreen="true" 
  //    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">

  //    </iframe>
  //    </div>

  //   {/* <div className="app__specialMenu-menu">
  //     <div className="app__specialMenu-menu_wine  flex__center">
  //       <p className="app__specialMenu-menu_heading">Wine & Beer</p>
  //       <div className="app__specialMenu_menu_items">
  //         {data.wines.map((wine, index) => (
  //           <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
  //         ))}
  //       </div>
  //     </div>

  //     <div className="app__specialMenu-menu_img">
  //       <img src={images.cocktail} alt="menu__img" />
  //     </div>

  //     <div className="app__specialMenu-menu_cocktails  flex__center">
  //       <p className="app__specialMenu-menu_heading">Cocktails</p>
  //       <div className="app__specialMenu_menu_items">
  //         {data.cocktails.map((cocktail, index) => (
  //           <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>

  //   <div style={{ marginTop: 15 }}>
  //     <button type="button" className="custom__button">View More</button>
  //   </div> */}
  // </div>



  <div className="app__bg app__wrapper section__padding" id="events">

  <div 
  className="app__wrapper_img app__wrapper_img-reverse"
  >
 <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fdragonsdensbar%2F%3Futm_source%3Drestaurantguru%26utm_medium%3Dreferral&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="500" height="500" 
//  style="border:none;overflow:hidden"
  // scrolling="no" frameborder="0" allowfullscreen="true"
  allow="autoplay; clipboard-write;
   encrypted-media; picture-in-picture; 
   web-share"></iframe>
    {/* <img src={images.bottle} alt="chef_image" /> */}
  </div>
  <div className="app__wrapper_info">
  <h1 className="headtext__cormorant">Events & Shows</h1>
    <SubHeading title="Exciting events for every single day" />
   

    <div className="app__chef-content">
      <div className="app__chef-content_quote">
        {/* <img src={images.quote} alt="quote_image" /> */}
        <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
      </div>
      <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
    </div>

    {/* <div className="app__chef-sign"> */}
      {/* <p>Mike</p> */}
   
      {/* <p className="p__opensans"> Founder</p> */}
      {/* <img src={images.sign} alt="sign_image" /> */}
    {/* </div> */}
  </div>
</div>
);

export default SpecialMenu;
