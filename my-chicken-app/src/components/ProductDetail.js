import React from "react";
import "../styles/productdetails.css"

function ProductDetails({ product }){
    if (!product){
        return <div id="ins">Select a product to see details</div>
    }
    return(
        <div id="prodet">
            <div className="detail" >
                <h2>Product Details</h2>
                <p>Name :{product.name}</p>
                <p>Product ID :{product.id}</p>
                <p>Price :{product.price}</p>
                <p>Description :{product.description}</p>
            </div>
        </div>
        
    );
}

export default ProductDetails

