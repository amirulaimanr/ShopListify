import "./App.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import HeaderBar from "./components/HeaderBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";
import Rice from "./components/Rice";
import Cart from "./components/Cart";

import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id != product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <header>
        <HeaderBar></HeaderBar>
      </header>
      <body>
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
              />
            }
          />
          {/* menu bar path */}
          <Route path="/" element={<Home />} />
          <Route
            path="/vegetables"
            element={<Vegetables handleAddProduct={handleAddProduct} />}
          />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/rice" element={<Rice />} />
        </Routes>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
