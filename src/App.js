import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Cart from "./component/cart";
import Checkout from "./component/checkout";
import Content from "./component/content";
import Payment from "./component/payment";
import Product from "./component/product";
import CategoryProduct from "./component/categoryProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}></Route>
        <Route path="/product/:name/:id" element={<Product />}></Route>
        <Route path="/product/:name" element={<CategoryProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
