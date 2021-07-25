import React, { useState } from "react";
import { Header } from "./common-components/Header";
import { Products } from "./pages/Products";
function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
