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

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <HeaderBar></HeaderBar>
      </header>
      <body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vegetables" element={<Vegetables />} />
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
