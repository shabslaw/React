import axios from "axios";
import { useState, useEffect } from "react";
import { ProductGrid } from "./ProductGrid";
import Header from "../../components/Header";
import "./HomePage.css"


function HomePage({cart}) {
    const [products, setProduct] = useState([]);

    // Using fetch to get data from API
    /*
    fetch('http://localhost:3000/api/products')
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            console.log(data);
        });
        */

    // Using Axios to get data from API
    useEffect(()=>{
        axios.get('/api/products')
            .then((response)=>{
                setProduct(response.data);
            });
    }, []);
    
    

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductGrid products={products} />
            </div>
        </>
    );
}

export default HomePage;