import React from "react";

function ProductDetails({ product }){
    if (!product){
        return <div>Select a product to see details</div>
    }
    return(
        <div className="detail" id="prodet">
            <h2>Product Details</h2>
            <p>Name :{product.name}</p>
            <p>Product ID :{product.id}</p>
            <p>Price :{product.price}</p>
            <p>Description :{product.description}</p>
        </div>
    );
}

export default ProductDetails

