import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import "../src/css/app.css";
import { ShoppingCartProvider } from "./context/CartContext";
import Form from "./components/Form";
const App = () => {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/category/:category"
            element={<ItemListContainer />}
          />
          <Route exact path="/product/:id" element={<ItemDetailContainer />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/Form" element={<Form />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
};

export default App;
