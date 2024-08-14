import React, { useState } from "react";
import "../styles/toppicksslider.css"; // CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const topPicks = [
    { id: 1, name: 'Chicken', price: '$10', image: 'chicken.jpg' },
    { id: 2, name: 'Chick', price: '$5', image: 'chick.jpg' },
    { id: 3, name: 'Eggs', price: '$1', image: 'eggs.jpg' },
    { id: 4, name: 'Hen', price: '$12', image: 'hen.jpg' },
    { id: 5, name: 'Fertilized Eggs', price: '$2', image: 'fertilized-eggs.jpg' }
];



function TopPicksSlider() {
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of cards to show at once
        slidesToScroll: 1,
        autoplay: true,        // Automatically slide
        autoplaySpeed: 2000,   // Slide every 2 seconds
        arrows: true,          // Enable arrows for navigation
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768, // Adjust the number of cards on smaller screens
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className="card-slider">
            <h2>Top Picks Today</h2>
            <div className="sldcontainer">
            <Slider {...settings}>
                {topPicks.map(product => (
                    <div key={product.id} className="card">
                        <img src={`https://via.placeholder.com/150`}  />
                        <div className="card-info">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
            
        </div>
    );
}

export default TopPicksSlider;