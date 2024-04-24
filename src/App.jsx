import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, SpecialMenu ,CardSlider } from './container';
import { Navbar } from './components';
import './App.css';
import  CardSlide  from './container/CardSlider/CardSlide';


const App = () => (
  <div>
    <Navbar />
    <Header />
    {/* <Chef /> */}
    <AboutUs />
    <Gallery />
    
    <SpecialMenu />
{/* <CardSlide/> */}
    <Intro />
   
    

    <FindUs />
    {/* <Footer /> */}
  </div>
);

export default App;
