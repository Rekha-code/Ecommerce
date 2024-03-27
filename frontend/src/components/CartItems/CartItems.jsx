import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../assets/cart_cross_icon.png";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div>
      <div className="cartitems">
        <div className="cartitem-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
      </div>
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitem-format-main">
                <img src={e.image} alt="" className="cartitem-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity-data">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p style={{ float: "right", marginTop: "-37px" }}>
                ${getTotalCartAmount()}
              </p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="proceed-btn">PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <div className="cartitems-promocode-title">
            <p>If you have a promo code,Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder="promo code" />
              <button className="proceed-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
