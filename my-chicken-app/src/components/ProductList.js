import React,{useEffect, useState} from "react";
import ProductDetail from './ProductDetail'
import '../styles/productlist.css';

const mockProducts = [
    { id: 1, name: 'Chicken', price: '$10', category: 'Chickens' },
    { id: 2, name: 'Chick', price: '$5', category: 'Chicks' },
    { id: 3, name: 'Egg', price: '$1', category: 'Eggs' },
    { id: 4, name: 'Hen', price: '$12', category: 'Chickens' },
    { id: 5, name: 'Fertilized Egg', price: '$2', category: 'Eggs' }
  ];




function ProductList() {

    const [selectedProduct, setselectedProduct] = useState(null);
    const [products,setProducts]=useState([]);
    const [category,setCategory]=useState('All');
    useEffect(()=>{
        // Simulate an API call by delayin by 1second
        setTimeout(()=>{
            setProducts(mockProducts);
        },1000);
    },[]);
    
    return (
        <div>
            <h2>Product List</h2>
            <div className="prodcardbox" >
                {products.map(product=>(
                    <div className="prodcard" key ={product.id} onClick={()=> setselectedProduct(product)}>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <ProductDetail product={selectedProduct}/>
        </div>
    );
}

export default ProductList

