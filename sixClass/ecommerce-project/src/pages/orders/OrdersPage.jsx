import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { OrderGrid } from "./OrderGrid";
import "./OrdersPage.css";


function OrdersPage({ cart, loadCartData }) {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersData = async ()=>{
            const response = await axios.get("/api/orders?expand=products")
            setOrders(response.data);
        }
        
        fetchOrdersData();
    }, [])

    return (
        <>
            <link rel="icon" type="image/svg+xml" href="/orders-favicon.png" />
            <title>Orders</title>

            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <OrderGrid orders={orders} loadCartData={loadCartData} />
            </div>
        </>
    );
}

export default OrdersPage;