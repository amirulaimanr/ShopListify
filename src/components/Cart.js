import React, { Component } from "react";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";

import product_card from "../data/product_data";
import "../assets/style/cart.css";

import { Link } from "react-router-dom";

export default function Cart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
}) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  return (
    <div className="Cart">
      <div className="cart-items">
        <div className="card-item-header">
          <i className="pi pi-shopping-bag bag-logo"></i>
          <div className="cart-title">My Cart</div>
          <div className="details-header">
            <div class="grid">
              <div class="col">Item</div>
              <div class="col">Name</div>
              <div class="col">Quantity (kg)</div>
              <div class="col">Price (per unit)</div>
            </div>
          </div>
        </div>
        {cartItems.length === 0 && (
          <div className="cart-items-empty">No items in the cart</div>
        )}

        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-items-list">
              <div class="grid grid-list">
                <div class="col">
                  <img
                    className="cart-items-image"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div class="col">
                  <div className="cart-items-name">{item.name}</div>
                </div>
                <div class="col">
                  <div className="cart-items-quantity">{item.quantity}</div>
                  <div className="cart-items-function">
                    <div
                      className="cart-items-add"
                      onClick={() => handleAddProduct(item)}
                    >
                      +
                    </div>
                    <div
                      className="cart-items-remove"
                      onClick={() => handleRemoveProduct(item)}
                    >
                      {" "}
                      -{" "}
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div className="cart-items-price">RM {item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-items-total-price-name">
          <div className="total-price-title">Total Price</div>
          <div className="cart-items-total-price"> RM {totalPrice}</div>
        </div>
        <div className="checkout-btn">
          <Button label="Checkout" className="c-btn" />
        </div>
      </div>
    </div>
  );
}
