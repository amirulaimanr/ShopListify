import "./App.css";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";

import HeaderBar from "./components/HeaderBar";
import MenuBar from "./components/MenuBar";

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
        </Routes>
      </body>
    </div>
  );
}

export default App;
