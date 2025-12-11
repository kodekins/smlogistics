import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartImg1 from "../../assets/images/shop/cart-page-img-1.jpg";
import CartImg2 from "../../assets/images/shop/cart-page-img-2.jpg";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: CartImg1,
      name: "Comfy chair",
      price: 10.99,
      quantity: 1,
    },
    {
      id: 2,
      image: CartImg2,
      name: "Classic chair",
      price: 10.99,
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shipping = 0.0; // Could be dynamic
    return (subtotal + shipping).toFixed(2);
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="cart-page">
      <div className="container">
        <div className="table-responsive">
          <table className="table cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-box">
                      <div className="img-box">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <h3>
                        <Link to="/product-details">{item.name}</Link>
                      </h3>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="quantity-box">
                      <button
                        type="button"
                        className="sub"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                        min="1"
                      />
                      <button
                        type="button"
                        className="add"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <div
                      className="cross-icon"
                      onClick={() => removeItem(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="fas fa-times"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <form
              onSubmit={handleCouponSubmit}
              className="default-form cart-cupon__form"
            >
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="cart-cupon__input"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button className="thm-btn" type="submit">
                Apply Coupon
                <span className="hover-btn hover-bx"></span>
                <span className="hover-btn hover-bx2"></span>
                <span className="hover-btn hover-bx3"></span>
                <span className="hover-btn hover-bx4"></span>
              </button>
            </form>
          </div>
          <div className="col-xl-4 col-lg-5">
            <ul className="cart-total list-unstyled">
              <li>
                <span>Subtotal</span>
                <span>${calculateSubtotal()} USD</span>
              </li>
              <li>
                <span>Shipping Cost</span>
                <span>$0.00 USD</span>
              </li>
              <li>
                <span>Total</span>
                <span className="cart-total-amount">
                  ${calculateTotal()} USD
                </span>
              </li>
            </ul>
            <div className="cart-page__buttons">
              <div className="cart-page__buttons-1">
                <button className="thm-btn">
                  Update
                  <span className="hover-btn hover-bx"></span>
                  <span className="hover-btn hover-bx2"></span>
                  <span className="hover-btn hover-bx3"></span>
                  <span className="hover-btn hover-bx4"></span>
                </button>
              </div>
              <div className="cart-page__buttons-2">
                <Link to="/checkout" className="thm-btn">
                  Checkout
                  <span className="hover-btn hover-bx"></span>
                  <span className="hover-btn hover-bx2"></span>
                  <span className="hover-btn hover-bx3"></span>
                  <span className="hover-btn hover-bx4"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
