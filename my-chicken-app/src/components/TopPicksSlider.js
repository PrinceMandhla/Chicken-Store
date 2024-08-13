import React, { useState } from "react";
import "../styles/toppicksslider.css"; // CSS file for styling

const topPicks = [
    { id: 1, name: 'Chicken', price: '$10', image: 'chicken.jpg' },
    { id: 2, name: 'Chick', price: '$5', image: 'chick.jpg' },
    { id: 3, name: 'Egg', price: '$1', image: 'egg.jpg' },
    { id: 4, name: 'Hen', price: '$12', image: 'hen.jpg' },
    { id: 5, name: 'Fertilized Egg', price: '$2', image: 'fertilized-egg.jpg' }
];

function TopPicksSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? topPicks.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === topPicks.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="slider-container">
            <h2>Top Picks</h2>
            <div className="slider">
                <button className="slider-button prev-button" onClick={goToPrevious}>
                    &#10094;
                </button>
                <div className="card">
                    <img src={topPicks[currentIndex].image} alt={topPicks[currentIndex].name} />
                    <h3>{topPicks[currentIndex].name}</h3>
                    <p>{topPicks[currentIndex].price}</p>
                </div>
                <button className="slider-button next-button" onClick={goToNext}>
                    &#10095;
                </button>
            </div>
        </div>
    );
}

export default TopPicksSlider;