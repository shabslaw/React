import dayjs from "dayjs"
import { DeliveryOption } from "./DeliveryOptions";
import { CartItemDetails } from "./CartItemDetails";

export function OrderSummary({ cart, deliveryOptions, loadCartData }) {
    return (
        <div className="order-summary">
            {deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId
                    });

                

                return (
                    <div key={cartItem.id} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectDeliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM D")}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={cartItem.product.image} />

                            <CartItemDetails cartItem={cartItem} loadCartData={loadCartData} />

                            <DeliveryOption
                                deliveryOptions={deliveryOptions}
                                cartItem={cartItem}
                                loadCartData={loadCartData}
                            />
                        </div>
                    </div>
                )
            })}
        </div>)
}