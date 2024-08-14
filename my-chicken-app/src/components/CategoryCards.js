import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/categorycards.css";

const poultryData = [
    { id: 1, name: 'Chicken', description: 'Commonly raised for meat and eggs.', category: 'chickens' },
    { id: 2, name: 'Duck', description: 'Known for their flavorful meat and eggs.', category: 'ducks' },
    { id: 3, name: 'Goose', description: 'Larger bird often raised for meat and feathers.', category: 'geese' },
    { id: 4, name: 'Turkey', description: 'Popular especially during festive seasons.', category: 'turkeys' },
    { id: 5, name: 'Quail', description: 'Small bird often raised for meat and feathers.', category: 'Quail' },
    { id: 6, name: 'Guinea fowl', description: 'Popular especially during festive seasons.', category: 'Guinea fowl' },
    // Add more poultry types as needed
];

function CategoryCards() {
    return (
        <div className="poultry-cards-container">
            {poultryData.map((poultry, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div key={poultry.id} className={`poultry-card ${isEven ? 'left-card' : 'right-card'}`}>
                        <div className="card-content">
                            {isEven && (
                                <div className="card-info">
                                    <h3>{poultry.name}</h3>
                                    <p>{poultry.description}</p>
                                    <Link to={`/products/${poultry.category}`} className="view-products">View Products</Link>
                                </div>
                            )}
                            <div className="card-image">
                                <img src={`https://via.placeholder.com/150`} alt={poultry.name} />
                            </div>
                            {!isEven && (
                                <div className="card-info">
                                    <h3>{poultry.name}</h3>
                                    <p>{poultry.description}</p>
                                    <Link to={`/products/${poultry.category}`} className="view-products">View Products</Link>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}


export default CategoryCards;