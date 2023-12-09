import React, { useState , useEffect } from "react";
import "./cart.css"; 
import * as ROUTES from "../../constants/routes";
import {
    Link,
  } from "@mui/material";



const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/api/cart') 
          .then(response => response.json())
          .then(data => {
            setCartItems(data.cartItems);
            setTotal(data.total);
          })
          .catch(error => console.error('There is no product to show', error));
      }, []);
  const handleIncrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <h2>You have {getTotalItems()} item(s) in your cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3 className="item-title">{item.name}</h3>
              <p className="item-price">{item.price}</p>
              <div className="item-quantity">
                <button onClick={() => handleDecrement(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleClearCart}>Clear Cart</button>
      <br></br>
      <br></br>

      <button style={{ alignSelf: "center", justifySelf: "center" }}>
        <Link href={ROUTES.Checkout} variant="body2"
          style={{ textDecoration: "none", color: "white" }}
          to={"/checkout"}
          state={{ cart: cart }}
        >
          Checkout
        </Link>
      </button>
    </div>
  );
};

export default CartPage;
