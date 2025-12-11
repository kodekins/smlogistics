import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaypalIcon from "../../assets/images/shop/paypal-1.jpg";

const CheckoutPage = () => {
  const [billingInfo, setBillingInfo] = useState({
    country: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    createAccount: true,
  });

  const [shippingInfo, setShippingInfo] = useState({
    shipCountry: "",
    shipFirstName: "",
    shipLastName: "",
    shipCompany: "",
    shipAddress: "",
    shipApartment: "",
    shipCity: "",
    shipState: "",
    shipZip: "",
    shipEmail: "",
    shipPhone: "",
    orderNotes: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handleBillingChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const orderSummary = [
    { name: "Product Name", price: 10.99 },
    { name: "Subtotal", price: 10.99 },
    { name: "Shipping", price: 0.0 },
    { name: "Total", price: 20.98 },
  ];

  return (
    <section className="checkout-page">
      <div className="container">
        <div className="row">
          {/* Billing Details */}
          <div className="col-xl-6 col-lg-6">
            <div className="billing_details">
              <div className="billing_title">
                <p>
                  Returning Customer?{" "}
                  <Link to="/login">Click here to Login</Link>
                </p>
                <h2>Billing details</h2>
              </div>
              <form className="billing_details_form">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <div className="select-box">
                        <select
                          className="wide nice-select"
                          name="country"
                          value={billingInfo.country}
                          onChange={handleBillingChange}
                          required
                        >
                          <option value="">Select a country</option>
                          <option value="Canada">Canada</option>
                          <option value="England">England</option>
                          <option value="Australia">Australia</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row bs-gutter-x-20">
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="firstName"
                        value={billingInfo.firstName}
                        onChange={handleBillingChange}
                        placeholder="First name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="lastName"
                        value={billingInfo.lastName}
                        onChange={handleBillingChange}
                        placeholder="Last name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="company"
                        value={billingInfo.company}
                        onChange={handleBillingChange}
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="address"
                        value={billingInfo.address}
                        onChange={handleBillingChange}
                        placeholder="Address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="apartment"
                        value={billingInfo.apartment}
                        onChange={handleBillingChange}
                        placeholder="Apartment, unit, etc. (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="city"
                        value={billingInfo.city}
                        onChange={handleBillingChange}
                        placeholder="Town / City"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row bs-gutter-x-20">
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="state"
                        value={billingInfo.state}
                        onChange={handleBillingChange}
                        placeholder="State"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        name="zip"
                        type="text"
                        pattern="[0-9]*"
                        value={billingInfo.zip}
                        onChange={handleBillingChange}
                        placeholder="Zip code"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        name="email"
                        type="email"
                        value={billingInfo.email}
                        onChange={handleBillingChange}
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="tel"
                        name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={billingInfo.phone}
                        onChange={handleBillingChange}
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="checked-box">
                      <input
                        type="checkbox"
                        name="createAccount"
                        id="skipper"
                        checked={billingInfo.createAccount}
                        onChange={handleBillingChange}
                      />
                      <label htmlFor="skipper">
                        <span></span>Create an account?
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="col-xl-6 col-lg-6">
            <div className="billing_details ship_different_address">
              <div className="billing_title ship_different_address_title">
                <h2>
                  Ship to a different address{" "}
                  <span className="fa fa-check-circle"></span>
                </h2>
              </div>
              <form className="billing_details_form ship_different_address_form">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <div className="select-box">
                        <select
                          className="wide nice-select"
                          name="shipCountry"
                          value={shippingInfo.shipCountry}
                          onChange={handleShippingChange}
                        >
                          <option value="">Select a country</option>
                          <option value="Canada">Canada</option>
                          <option value="England">England</option>
                          <option value="Australia">Australia</option>
                          <option value="USA">USA</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row bs-gutter-x-20">
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="shipFirstName"
                        value={shippingInfo.shipFirstName}
                        onChange={handleShippingChange}
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="shipLastName"
                        value={shippingInfo.shipLastName}
                        onChange={handleShippingChange}
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="shipCompany"
                        value={shippingInfo.shipCompany}
                        onChange={handleShippingChange}
                        placeholder="Company"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="shipAddress"
                        value={shippingInfo.shipAddress}
                        onChange={handleShippingChange}
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="shipApartment"
                        value={shippingInfo.shipApartment}
                        onChange={handleShippingChange}
                        placeholder="Apartment, unit, etc. (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="shipCity"
                        value={shippingInfo.shipCity}
                        onChange={handleShippingChange}
                        placeholder="Town / City"
                      />
                    </div>
                  </div>
                </div>
                <div className="row bs-gutter-x-20">
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="text"
                        name="shipState"
                        value={shippingInfo.shipState}
                        onChange={handleShippingChange}
                        placeholder="State"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        name="shipZip"
                        type="text"
                        pattern="[0-9]*"
                        value={shippingInfo.shipZip}
                        onChange={handleShippingChange}
                        placeholder="Zip code"
                      />
                    </div>
                  </div>
                </div>
                <div className="row bs-gutter-x-20">
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        name="shipEmail"
                        type="email"
                        value={shippingInfo.shipEmail}
                        onChange={handleShippingChange}
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="billing_input_box">
                      <input
                        type="tel"
                        name="shipPhone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        value={shippingInfo.shipPhone}
                        onChange={handleShippingChange}
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="ship_different_input">
                      <textarea
                        placeholder="Notes about order"
                        name="orderNotes"
                        value={shippingInfo.orderNotes}
                        onChange={handleShippingChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="your_order">
          <h2>Your order</h2>
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="order_table_box">
                <table className="order_table_detail">
                  <thead className="order_table_head">
                    <tr>
                      <th>Product</th>
                      <th className="right">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderSummary.map((item, index) => (
                      <tr key={index}>
                        <td className="pro__title">{item.name}</td>
                        <td className="pro__price">
                          ${item.price.toFixed(2)} USD
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="checkout__payment">
                <div
                  className={`checkout__payment__item ${
                    paymentMethod === "bank"
                      ? "checkout__payment__item--active"
                      : ""
                  }`}
                  onClick={() => setPaymentMethod("bank")}
                >
                  <h3 className="checkout__payment__title">
                    Direct bank transfer
                  </h3>
                  <div className="checkout__payment__content">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order wont be
                    shipped until the funds have cleared.
                  </div>
                </div>
                <div
                  className={`checkout__payment__item ${
                    paymentMethod === "paypal"
                      ? "checkout__payment__item--active"
                      : ""
                  }`}
                  onClick={() => setPaymentMethod("paypal")}
                >
                  <h3 className="checkout__payment__title">
                    Paypal payment <img src={PaypalIcon} alt="Paypal" />
                  </h3>
                  <div className="checkout__payment__content">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order wont be
                    shipped until the funds have cleared.
                  </div>
                </div>
              </div>
              <div className="text-right d-flex justify-content-end">
                <button className="thm-btn" onClick={handleSubmit}>
                  Place your order
                  <i className="icon-right-arrow21"></i>
                  <span className="hover-btn hover-bx"></span>
                  <span className="hover-btn hover-bx2"></span>
                  <span className="hover-btn hover-bx3"></span>
                  <span className="hover-btn hover-bx4"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
