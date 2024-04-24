import React from 'react'
import CardSlider from './CardSlider'
import { images } from '../../constants';

// images.tequilla, images.tankard,images.shooters, images.caesars,images.cocktails,images.coolers,images.beer
const cards = [
    { img: images.beer, description: 'Description 1' },
    { img: images.tequilla, description: 'Description 2' },
    { img: images.tankard, description: 'Description 3' },



    { img: images.shooters, description: 'Description 1' },
    { img: images.caesars, description: 'Description 2' },
    { img: images.cocktails, description: 'Description 3' },
    { img: images.coolers, description: 'Description 3' },
  ];
 const CardSlide = () => {
  return (
    <div>
       <CardSlider cards={cards}/> 

    </div>
  )
}
export default CardSlide;