import {Route, Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavbarTop from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import ProductPage from "./pages/ProductPage.jsx";
function App() {
  return (
    // <Router>
        <div className="app">
          <NavbarTop/>
            <main>
                <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/products" element={<ProductPage/>} />
                </Routes>
            </main>
          <Footer/>
        </div>
    // {/*</Router>*/}
  )
}

export default App;
