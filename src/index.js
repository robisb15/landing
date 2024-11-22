import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
  App
} from "./pages";

import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

// Daftar URL yang diizinkan untuk redirect
// const allowedRedirects = ["https://google.com", "https://trustedsite.com"];

function RedirectHandler() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const targetUrl = params.get("target");

  useEffect(() => {
    if (targetUrl) {
      // Simpan URL target di localStorage untuk cache request
      localStorage.setItem("redirectTarget", targetUrl);

      // Periksa apakah URL diizinkan
    
        console.log("Redirecting to:", targetUrl);
        // Redirect ke URL eksternal
        window.location.href = targetUrl;
     
    }
  }, [targetUrl]);

  // Jika tidak ada parameter atau URL tidak diizinkan, arahkan ke beranda
  return <Navigate to="/" replace />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/app" element={<App/>} />

          {/* Rute khusus untuk menangani redirect dengan query parameter "target" */}
          <Route path="/redirect" element={<RedirectHandler />} />

          {/* Route fallback untuk halaman tidak ditemukan */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ScrollToTop>
      <Toaster />
    </BrowserRouter>
  </Provider>
);
