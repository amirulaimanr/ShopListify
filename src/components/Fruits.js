import React, { Component } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

import product_card from "../data/product_data_fruits";
import "../assets/style/vegetables.css";

import { Link } from "react-router-dom";

export default function Fruits() {
  const listItem = product_card.map((item) => (
    <div className="card-veg" key="{item.id}">
      <div className="card_img">
        <img src={item.image} />
      </div>
      <div className="card_header">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <div className="price">
          {item.price}
          <span>{item.currency}</span>
        </div>
        <div className="btn">Add to cart</div>
      </div>
    </div>
  ));

  return <div className="vegetables">{listItem}</div>;
}
