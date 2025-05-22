import {Route, Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NavbarTop from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
function App() {
  return (
    // <Router>
        <div className="app">
          <NavbarTop/>
            <main>
                <Routes>
                  <Route path="/" element={<HomePage/>} />
                </Routes>
            </main>
          <Footer/>
        </div>
    // {/*</Router>*/}
  )
}

export default App;
