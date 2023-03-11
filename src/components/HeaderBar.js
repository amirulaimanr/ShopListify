import React, { Component } from "react";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

import "../assets/style/headerBar/headerBar.css";

class HeaderBar extends Component {
  render() {
    return (
      <div className="card">
        <div className="relative card-container yellow-container">
          <div className="block bg-yellow-200 font-bold text-center p-4 mb-3 h-7rem">
            <div className="header-title">
              <h2>ShopListify</h2>
            </div>

            {/* cart topbar */}
            <div className="card cart-container right-bar">
              <div className="cart-logo logo">
                <a href="www.google.com">
                  <i
                    className="pi pi-shopping-cart"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </a>
              </div>
            </div>

            {/* myaccount topbar */}
            <div className="card profile-container left-bar">
              <div className="account-logo logo">
                <a href="www.google.com">
                  <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
