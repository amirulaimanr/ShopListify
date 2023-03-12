import React, { Component } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

import "../assets/style/headerBar/headerBar.css";

import { Link } from "react-router-dom";

class HeaderBar extends Component {
  render() {
    return (
      <div className="card">
        <div className="relative card-container yellow-container">
          <div className="block font-bold text-center p-4 h-7rem">
            <div className="header-title text-black">
              <div>ShopListify</div>
            </div>

            {/* cart topbar */}
            <div className="card cart-container right-bar">
              <div className="cart-logo logo">
                <a href="www.google.com">
                  <i
                    className="pi pi-shopping-cart"
                    style={{ fontSize: "2rem", color: "black" }}
                  ></i>
                </a>
              </div>
            </div>

            {/* myaccount topbar */}
            <div className="card profile-container left-bar">
              <div className="account-logo logo">
                <a href="www.google.com">
                  <i
                    className="pi pi-user"
                    style={{ fontSize: "2rem", color: "black" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>

          {/* menu bar */}
          <div className="card">
            <div className="relative menu-container">
              <div className="block font-bold text-center p-4 h-6rem menu-content">
                <div className="menu-bar">
                  <div className="menu container">
                    <div className="menu-item">
                      <ul>
                        <li>Home</li>
                        <li>Vegetables</li>
                        <li>Fruits</li>
                        <li>Rice/Grains</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
