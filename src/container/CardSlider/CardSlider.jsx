import React, { useState } from 'react';

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div 
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}
    >
      <button onClick={prevSlide}>Prev</button>
      {/* <div 
      style={{ display: 'flex', overflow: 'hidden',
      //  width: '300px' 
      }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
             style={{
               flex: '0 0 100%',
              transition: 'transform 0.5s ease',
              transform: `translateX(-${currentIndex * 100}%)`,
             }}
          >
            <img src={card.img}/>
            <div
              // style={{
              //   backgroundColor: '#fff',
              //   boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              //   borderRadius: '8px',
              //   padding: '20px',
              //   textAlign: 'center',
              // }}
            >
              
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div> */}

{cards.map((card, index) => (
      <div className="card" style={{width: '18rem'}}>
  <img src={card.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
 ))}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default CardSlider;
