import React from "react";
import { Link } from "react-router-dom"; 
import "../styles/categorycards.css";

const poultryData = [
    { id: 1, name: 'Chicken', description: 'Commonly raised for meat and eggs.', category: 'chickens' },
    { id: 2, name: 'Duck', description: 'Known for their flavorful meat and eggs.', category: 'ducks' },
    { id: 3, name: 'Goose', description: 'Larger bird often raised for meat and feathers.', category: 'geese' },
    { id: 4, name: 'Turkey', description: 'Popular especially during festive seasons.', category: 'turkeys' },
    // Add more poultry types as needed
];

function CategoryCards (){
    return (
    <div className="poultry-cards-container">
        {poultryData.map((poultry, index) => (
            <div 
                key={poultry.id} 
                className={`poultry-card ${index % 2 === 0 ? 'left-card' : 'right-card'}`}
            >
                <div className="card-content">
                    {index % 2 === 0 ? (
                        <>
                            <div className="card-info">
                                <h3>{poultry.name}</h3>
                                <p>{poultry.description}</p>
                                <Link to={`/products/${poultry.category}`} className="view-products">View Products</Link>
                            </div>
                            <div className="card-image">
                                <img src={`https://via.placeholder.com/150`} alt={poultry.name} />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="card-image">
                                <img src={`https://via.placeholder.com/150`} alt={poultry.name} />
                            </div>
                            <div className="card-info">
                                <h3>{poultry.name}</h3>
                                <p>{poultry.description}</p>
                                <Link to={`/products/${poultry.category}`} className="view-products">View Products</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        ))}
    </div>
);
}

export default CategoryCards;