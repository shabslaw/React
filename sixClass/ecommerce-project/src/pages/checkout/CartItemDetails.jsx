import axios from "axios";
import { formartMoney } from "../../utils/money"
import { useState } from "react";

export function CartItemDetails({ cartItem, loadCartData }) {
    const [updateClick, setUpdateClick] = useState(false)
    const [quantity, setQuantity] = useState(cartItem.quantity)

    const updateCartItem = async () => {
        setUpdateClick(true);

        if (updateClick) {
            await axios.put(`/api/cart-items/${cartItem.productId}`, {
                quantity: Number(quantity)
            })

            loadCartData();
            setUpdateClick(!quantity);
        };

    }

    const inputOnKeyDown = (event)=>{
        const key = event.key;
        
        if ( key === 'Enter'){
            updateCartItem()
        }else if (event.key === 'Escape'){
            setQuantity(cartItem.quantity);
            setQuantity(false);
        }
    }

    // console.log(cartItem);


    const updateInput = (event) => {
        const input = event.target.value;
        setQuantity(input);
    }

    const deleteCartItem = async () => {
        await axios.delete(`/api/cart-items/${cartItem.productId}`);
        await loadCartData();
    }

    return (
        <div className="cart-item-details">
            <div className="product-name">
                {cartItem.product.name}
            </div>
            <div className="product-price">
                {formartMoney(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">
                <span>
                    Quantity:
                    {updateClick && <input
                        type="text"
                        className="textbox"
                        value={quantity}
                        onChange={updateInput}
                        onKeyDown={inputOnKeyDown}
                    />}
                    <span className="quantity-label">{cartItem.quantity}</span>
                </span>
                <span
                    className="update-quantity-link link-primary"
                    onClick={updateCartItem}
                >
                    Update
                </span>
                <span
                    className="delete-quantity-link link-primary"
                    onClick={deleteCartItem}
                >
                    Delete
                </span>
            </div>
        </div>
    )
}