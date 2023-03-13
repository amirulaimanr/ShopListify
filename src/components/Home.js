import React, { Component } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

import "../assets/style/headerBar/headerBar.css";
import banner from "../assets/img/banner.jpg";
import "../assets/style/body.css";

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card">
      {/* banner pictures */}
      <div className="banner-container">
        <img src={require("../assets/img/banner.jpg")} />
      </div>

      {/* grid pictures */}
      <div className="grid col-container">
        <div class="col">
          <div className="banner1">
            <img src={require("../assets/img/grid3.jpg")} />
          </div>
        </div>
        <div class="col">
          <div className="banner2">
            <img src={require("../assets/img/grid4.jpg")} />
          </div>
        </div>
      </div>

      {/* features */}
      <div className="features-container">
        <div className="surface-0 text-center">
          <div className="mb-3 font-bold text-3xl">
            <span className="text-900">What we, </span>
            <span className="text-green-600">Provide to You</span>
          </div>
          <div className="text-700 mb-6">
            ShopListify offers a great solution for all your healthy food needs.
          </div>
          <div className="grid">
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-thumbs-up-fill text-4xl text-green-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                High-quality products
              </div>
              <span className="text-700 line-height-3">
                ShopListify offers a range of high-quality fruits, vegetables,
                and other healthy foods that are carefully selected and sourced
                to ensure freshness and quality.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-lock text-4xl text-green-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Convenience
              </div>
              <span className="text-700 line-height-3">
                Shopping with ShopListify is quick and easy. Users can browse,
                select, and purchase their favorite healthy foods all from the
                comfort of their own home, saving time and hassle.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-check-circle text-4xl text-green-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Nutritional information
              </div>
              <span className="text-700 line-height-3">
                Each product on ShopListify includes detailed nutritional
                information, making it easy for users to make informed decisions
                about what they're eating.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-globe text-4xl text-green-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Delivery options
              </div>
              <span className="text-700 line-height-3">
                ShopListify offers multiple delivery options to suit different
                needs, including same-day delivery for select areas.
              </span>
            </div>
            <div className="col-12 md:col-4 mb-4 px-5">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-heart-fill text-4xl text-green-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Sustainable sourcing
              </div>
              <span className="text-700 line-height-3">
                ShopListify is committed to sustainable and ethical sourcing
                practices, ensuring that the products they offer are grown and
                harvested in environmentally responsible ways.{" "}
              </span>
            </div>
            <div className="col-12 md:col-4 md:mb-4 mb-0 px-3">
              <span
                className="p-3 shadow-2 mb-3 inline-block"
                style={{ borderRadius: "10px" }}
              >
                <i className="pi pi-shield text-4xl text-green-500"></i>
              </span>
              <div className="text-900 text-xl mb-3 font-medium">
                Excellent customer service
              </div>
              <span className="text-700 line-height-3">
                ShopListify prides itself on providing excellent customer
                service and support, making it easy for users to get help and
                answers to their questions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
