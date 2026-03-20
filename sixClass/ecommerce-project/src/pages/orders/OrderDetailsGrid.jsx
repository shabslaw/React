import dayjs from "dayjs";
import axios from "axios";
import { Fragment } from "react";
import { Link } from "react-router";


export function OrderDetailsGrid({ order, loadCartData }) {
    return (
        <div className="order-details-grid">
            {order.products.map((productItem) => {

                // console.log(productItem);

                const addToCart = async () => {
                    await axios.post("/api/cart-items", {
                        productId: productItem.productId,
                        quantity: productItem.quantity
                    });

                    await loadCartData()
                }

                return (<Fragment key={productItem.productId}>
                    <div className="product-image-container">
                        <img src={productItem.product.image} />
                    </div>

                    <div className="product-details">
                        <div className="product-name">
                            {productItem.product.name}
                        </div>
                        <div className="product-delivery-date">
                            Arriving on: {dayjs(productItem.estimatedDeliveryTimeMs).format("MMMM D")}
                        </div>
                        <div className="product-quantity">
                            Quantity: {productItem.quantity}
                        </div>
                        <button className="buy-again-button button-primary">
                            <img className="buy-again-icon" src="images/icons/buy-again.png" />
                            <span
                                className="buy-again-message"
                                onClick={addToCart}
                            >Add to Cart</span>
                        </button>
                    </div>

                    <div className="product-actions">
                        <Link to={`/tracking/${order.id}/${productItem.productId}`}>
                            <button className="track-package-button button-secondary">
                                Track package
                            </button>
                        </Link>
                    </div>
                </Fragment>)
            })}
        </div>
    );
}