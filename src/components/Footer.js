import React, { Component } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

import "../assets/style/headerBar/headerBar.css";
import banner from "../assets/img/banner.jpg";
import "../assets/style/body.css";
import "../assets/style/footer.css";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="App-footer">
      {/* hot deal banner */}
      <div className="deal-container">
        <div className="bg-green-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
          <div className="font-bold mr-8">🔥 Stay in touch!</div>
          <div className="align-items-center hidden lg:flex">
            <span className="line-height-3">
              Join the community to be updated firstly now !
            </span>
          </div>
          <a className="flex align-items-center ml-2 mr-8">
            <span className="underline font-bold">Learn More</span>
          </a>
          <a
            className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150"
            style={{ width: "2rem", height: "2rem" }}
          >
            <i className="pi pi-times"></i>
          </a>
        </div>
      </div>

      {/* footer block */}

      <block>
        <div className="footer-block">
          <div class="footer-content">
            <h3>Discover the Best in Healthy Eating with ShopListify </h3>

            <p>
              Your One-Stop-Shop for Healthy Foods - Find the freshest fruits,
              vegetables, and other nutritious foods all in one place. From
              locally sourced produce to organic snacks, we've got everything
              you need to support your healthy lifestyle.
            </p>

            <ul class="socials">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-linkedin-square"></i>
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-bottom">
            <p>
              Copyright <span id="year"></span> <a href="#">@shopListify</a>{" "}
            </p>

            <div class="footer-menu">
              <ul class="f-menu">
                <li>
                  <a href="">Home</a>
                </li>

                <li>
                  <a href="">About</a>
                </li>

                <li>
                  <a href="">Contact</a>
                </li>

                <li>
                  <a href="">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </block>
    </div>
  );
}
