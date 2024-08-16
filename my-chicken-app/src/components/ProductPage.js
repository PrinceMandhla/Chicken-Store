import React from "react";
import { useParams } from "react-router-dom";
import "../styles/productdetails.css";

const mockProducts = [
    { id: 1, name: 'Chicken', price: '$10', category: 'Chickens', description: 'A healthy chicken' },
    { id: 2, name: 'Chick', price: '$5', category: 'Chicks', description: 'A cute chick' },
    { id: 3, name: 'Eggs', price: '$1', category: 'Eggs', description: 'A fresh egg' },
    { id: 4, name: 'Hen', price: '$12', category: 'Chickens', description: 'A productive hen' },
    { id: 5, name: 'Fertilized Egg', price: '$2', category: 'Eggs', description: 'A fertilized egg' }
];

function ProductPage() {
    const { id } = useParams();
    const product = mockProducts.find(p => p.id === parseInt(id));

    if (!product) {
        return <div id="ins">Product not found</div>;
    }

    return (
        <div className="det">
            <h2>Product Details</h2>
            <div id="prodet">
            <img src="https://via.placeholder.com/150" alt={product.name} className="product-image" />
                    
                <div className="detail">
                    <p>Name: {product.name}</p>
                    <p>Product ID: {product.id}</p>
                    <p>Price: {product.price}</p>
                    <p>Description: {product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
