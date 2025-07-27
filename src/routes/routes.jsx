import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "../pages/Main";
import MainLayout from "../layouts/MainLayout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart.jsx";
import Delivery from "../pages/Delivery";

const Router = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter >
  );
};

export default Router;
