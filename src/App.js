import React from "react";
import "./App.css";
import Header from "./components/Header";
import Routing from "./Routing/index";
import { ProductProvider } from "./components/Context/Context";


function App() {
  return (
    <div className="App">
      <ProductProvider>
      <Header />
      <React.Suspense fallback='Loading...'>
        <Routing />
      </React.Suspense>
      </ProductProvider>
    </div>
  );
}

export default App;
