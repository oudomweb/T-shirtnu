import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
    FaCreditCard,
    FaPaypal,
    FaApplePay,
    FaGooglePay,
} from "react-icons/fa"

const Footer = () => {
    return (
        <footer>
            {/* Newsletter Section */}
            <div className="newsletter-section py-5 bg-light">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <h3 className="mb-4">Subscribe to our Newsletter</h3>
                            <p className="mb-4">Stay updated with our latest trends and products</p>
                            <Form className="d-flex justify-content-center">
                                <Form.Control
                                    type="email"
                                    placeholder="Your email address"
                                    className="me-2"
                                    style={{ maxWidth: "400px" }}
                                />
                                <Button variant="dark">Subscribe</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Main Footer */}
            <div className="bg-dark text-white py-5">
                <Container>
                    <Row>
                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="mb-4">T-SHIRT SHOP</h5>
                            <p>
                                We offer premium quality t-shirts for men, women, and kids. Our products are made with the finest
                                materials for comfort and durability.
                            </p>
                            <div className="social-icons d-flex gap-3 mt-4">
                                <a href="#" className="text-white">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="text-white">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-white">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-white">
                                    <FaPinterest />
                                </a>
                                <a href="#" className="text-white">
                                    <FaYoutube />
                                </a>
                            </div>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="mb-4">Shop</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/men" className="text-white">
                                        Men
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/women" className="text-white">
                                        Women
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/boys" className="text-white">
                                        Boys
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/girls" className="text-white">
                                        Girls
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/new-arrivals" className="text-white">
                                        New Arrivals
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/discounts" className="text-white">
                                        Sale
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="mb-4">Customer Service</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/contact-us" className="text-white">
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/faqs" className="text-white">
                                        FAQs
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/shipping" className="text-white">
                                        Shipping & Returns
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/size-guide" className="text-white">
                                        Size Guide
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/track-order" className="text-white">
                                        Track Order
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="mb-4">About Us</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/about-us" className="text-white">
                                        Our Story
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/careers" className="text-white">
                                        Careers
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/sustainability" className="text-white">
                                        Sustainability
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/privacy-policy" className="text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/terms" className="text-white">
                                        Terms & Conditions
                                    </Link>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Bottom Footer */}
            <div className="bg-black text-white py-3">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6} className="text-center text-md-start">
                            <p className="mb-0">&copy; 2023 T-Shirt Shop. All rights reserved.</p>
                        </Col>
                        <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
                            <div className="payment-icons d-flex gap-3 justify-content-center justify-content-md-end">
                                <FaCreditCard size={24} />
                                <FaPaypal size={24} />
                                <FaApplePay size={24} />
                                <FaGooglePay size={24} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
