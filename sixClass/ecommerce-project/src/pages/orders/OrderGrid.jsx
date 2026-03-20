import { OrderDetailsGrid } from "./OrderDetailsGrid";
import { OrderHeader } from "./OrderHeader";


export function OrderGrid({ orders , loadCartData}) {
    return (
        <div className="orders-grid">
            {orders.map((order) => {
                return (
                    <div key={order.id} className="order-container">

                        <OrderHeader order={order} />

                        <OrderDetailsGrid order={order} loadCartData={loadCartData} />
                    </div>
                )
            })}
        </div>
    );
}