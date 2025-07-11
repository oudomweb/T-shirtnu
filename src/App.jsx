import {Route, Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavbarTop from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import MenProducts from "./pages/categoies/MenProduct.jsx";
import WomenProducts from "./pages/categoies/WomenProducts.jsx";
import BoysProducts from "./pages/categoies/BoysProduct.jsx";
import GirlsProducts from "./pages/categoies/GrilsProducts.jsx";
import BestSellers from "./pages/collections/BestSellers.jsx";
import PopularProducts from "./pages/collections/PopularProducts.jsx";
import SpecialProducts from "./pages/collections/SpecialProducts.jsx";
import DiscountPage from "./pages/DiscountPage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import CartPage from "./pages/CartPage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Profile from "./pages/profile/Profile.jsx";
function App() {
  return (
    // <Router>
    <div className="app">
      <NavbarTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/men" element={<MenProducts />} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/boys" element={<BoysProducts />} />
          <Route path="/girls" element={<GirlsProducts />} />
          <Route path="/best" element={<BestSellers />} />
          <Route path="/popular" element={<PopularProducts />} />
          <Route path="/special" element={<SpecialProducts />} />
          <Route path="/discounts" element={<DiscountPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/account" element={<Profile />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
    // {/*</Router>*/}
  );
}

export default App;
