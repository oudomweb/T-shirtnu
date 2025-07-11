"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  Button,
  Badge,
  Dropdown,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";
import logo from "../../assets/img/zaro.jpg";
import { useTranslation } from '../../store/translation';

const NavbarTop = () => {
  const [scrolled, setScrolled] = useState(false);
  // const [cartCount, setCartCount] = useState(3) // Mock cart count
  const [cartCount] = useState(3);
  // const [wishlistCount, setWishlistCount] = useState(2) // Mock wishlist count
  const [wishlistCount] = useState(2);
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header style={{}}>
      <div className="bg-dark text-white py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small>{t('free_shipping')}</small>
            </div>
            <div className="d-flex align-items-center">
              <small className="me-3">+855 962 089 546</small>
              <small className="me-3">oudomngoun29@gmail.com</small>
              {/* Language Switcher Dropdown */}
              <Dropdown>
                <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-language">
                  {language === 'en' ? 'EN' : 'ខ្មែរ'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setLanguage('en')} active={language === 'en'}>EN</Dropdown.Item>
                  <Dropdown.Item onClick={() => setLanguage('km')} active={language === 'km'}>ខ្មែរ</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </Container>
      </div>
      <Navbar
        expand="lg"
        className={`py-3 ${scrolled ? "bg-white shadow-sm" : "bg-white"}`}
        fixed={scrolled ? "top" : ""}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
            <img src={logo} alt="logo" style={{ width: 50 }} />
            ZARO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "fw-bold" : ""}
              >
                {/* Home */}
             {t('home')}
              </Nav.Link>

              <NavDropdown title={t('shop')} id="shop-dropdown">
                <NavDropdown.Item as={Link} to="/products">
                  {/* All Products */}
                     {t('all_products')}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/men">
                  {t('men')}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/women">
                  {t('women')}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/boys">
                  {t('boys')}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/girls">
                  {t('girls')}
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t('collections')} id="collections-dropdown">
                <NavDropdown.Item as={Link} to="/popular">
                  {t('popular_products')}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/special">
                {t('special_products')}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/best">
                  {t('best_sellers')}
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                as={Link}
                to="/discounts"
                className={location.pathname === "/discounts" ? "fw-bold" : ""}
              >
                {t('sale')}
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/about-us"
                className={location.pathname === "/about-us" ? "fw-bold" : ""}
              >
                {t('about_us')}
              </Nav.Link>

              <Nav.Link
                as={Link}
                to="/contact"
                className={location.pathname === "/contact-us" ? "fw-bold" : ""}
              >
                {t('contact')}
              </Nav.Link>
            </Nav>

            <div className="d-flex align-items-center">
              <Form className="d-flex me-2">
                <Form.Control
                  type="search"
                  placeholder={t('search')}
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-dark">
                  <FaSearch />
                </Button>
              </Form>

              <Link to="/wishlist" className="me-3 position-relative">
                <FaHeart size={20} />
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {wishlistCount}
                </Badge>
              </Link>

              <Link to="/cart" className="me-3 position-relative">
                <FaShoppingCart size={20} />
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cartCount}
                </Badge>
              </Link>

              <Link to="/account">
                <FaUser size={20} />
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavbarTop;
