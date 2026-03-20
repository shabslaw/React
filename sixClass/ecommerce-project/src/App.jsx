import axios from 'axios';
import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import HomePage from "./pages/home/HomePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import OrdersPage from "./pages/orders/OrdersPage";
import TrackingPage from "./pages/tracking/TrackingPage";
import NotFoundPage from "./pages/404/NotFoundPage";
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const loadCartData = async ()=>{
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }
  
  useEffect(()=>{
    
    loadCartData()
  }, []);

  // window.axios = axios;
  // console.log(axios.post("/api/reset"));
  

  return (
    <>
      <Routes>
        <Route 
          index 
          element={<HomePage cart={cart} loadCartData={loadCartData} />} 
        />
        <Route 
          path="checkout" 
          element={<CheckoutPage cart={cart} loadCartData={loadCartData} />} 
        />
        <Route path="orders" element={<OrdersPage cart={cart} loadCartData={loadCartData} />} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
