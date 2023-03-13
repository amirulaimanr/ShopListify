import React, { Component } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

import product_card from "../data/product_data_rice";
import "../assets/style/vegetables.css";

import { Link } from "react-router-dom";

export default function Rice({ handleAddProduct }) {
  const listItem = product_card.map((item) => (
    <div className="card-veg" key="{item.id}">
      <div className="card_img">
        <img src={item.image} />
      </div>
      <div className="card_header">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="price">
          <span>{item.currency}</span>
          {item.price}
        </div>
        <div className="btn" onClick={() => handleAddProduct(item)}>
          Add to cart
        </div>
      </div>
    </div>
  ));

  return <div className="vegetables">{listItem}</div>;
}
