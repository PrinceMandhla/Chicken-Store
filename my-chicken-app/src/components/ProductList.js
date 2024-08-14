import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/productlist.css';

const mockProducts = [
    { id: 1, name: 'Chicken', price: '$10', category: 'Chickens' },
    { id: 2, name: 'Chick', price: '$5', category: 'Chicks' },
    { id: 3, name: 'Eggs', price: '$1', category: 'Eggs' },
    { id: 4, name: 'Hen', price: '$12', category: 'Chickens' },
    { id: 5, name: 'Fertilized Egg', price: '$2', category: 'Eggs' }
];

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulate an API call by delaying by 1 second
        setTimeout(() => {
            setProducts(mockProducts);
        }, 1000);
    }, []);

    return (
        <div>
            <h2>All Our Products</h2>
            <div className="prodcardbox">
                {products.map(product => (
                    <Link to={`/products/${product.id}`} key={product.id} className="prodcard">
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
