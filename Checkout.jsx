import React, { useState } from "react";
import "./Checkout.css";

import * as ROUTES from "../../constants/routes";
import {
    Link,
  } from "@mui/material";
  


const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Billing Information</legend>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="Address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Payment Information</legend>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="number"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="expirationDate">expirationDate:</label>
            <input
              type="date"
              id="expirationDate"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleInputChange}
              required
            />
            
          </div>
          
        </fieldset>

        <button style={{ alignSelf: "center", justifySelf: "center" }}>
        <Link href={ROUTES.Thank} variant="body2"
          style={{ textDecoration: "none", color: "white" }}
          to={"/thank"}
        >
          Place Order
        </Link>
      </button>
    
      </form>
    </div>
  );
};

export default Checkout;
