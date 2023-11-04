import { useContext } from "react";
import "./CartItem.css"
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png"

const CartItem = () => {

    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext)
    console.log(all_product, cartItems);
    return (
        <div className="cartItem">
            <div className="cart-item-format-main cart-item-format">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div key={e.id}>
                        <div className="cart-item-format-main">
                            <img src={e.image} alt="" className="cartItems-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartItems-quantity">{cartItems[e.id]}

                            </button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className="cartItems-remove-icon" src={remove_icon}
                                onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartItemsDown">
                <div className="cartItemsTotal">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-total-items">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-total-items">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-item-promo-code">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cart-items-promo-box">
                        <input type="text"  placeholder="promo code"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;