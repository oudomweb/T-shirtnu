import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import {
    FaFacebookF,
    FaInstagram,
    FaCreditCard,
    FaPaypal,
    FaApplePay,
    FaGooglePay,
} from "react-icons/fa"
import { SiTiktok, SiTelegram } from 'react-icons/si';
import { useTranslation } from '../../store/translation';

const Footer = () => {
      const { language, setLanguage, t } = useTranslation();
    return (
        <footer>
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
                            <h5 className="mb-4">ZARO SHOP</h5>
                            <p>
                                {/* We offer premium quality t-shirts for men, women, and kids. Our products are made with the finest
                                materials for comfort and durability. */}
                                {t('footer_text_detail')}
                            </p>

                        <div className="social-icons d-flex gap-3 mt-4">
                            <a href="https://www.facebook.com/profile.php?id=61574512297193" className="text-white" target="_blank" rel="noopener noreferrer">
                                <FaFacebookF />
                            </a>
                            <a href="https://www.instagram.com/zaro.fit1?igsh=ZG5reTkyYWVyYWdy" className="text-white" target="_blank" rel="noopener noreferrer">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@zarofit1?_t=ZS-8xhzoE1dhLw&_r=1" className="text-white" target="_blank" rel="noopener noreferrer">
                                <SiTiktok />
                            </a>
                            <a href="https://t.me/ZAROFit1" className="text-white" target="_blank" rel="noopener noreferrer">
                                <SiTelegram />
                            </a>
                            
                        </div>

                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="mb-4">{t('shop')}</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/men" className="text-white">
                                        {t('men')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/women" className="text-white">
                                        {t('women')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/boys" className="text-white">
                                        {t('boys')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/girls" className="text-white">
                                        {t('girls')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/new-arrivals" className="text-white">
                                        
                                        {t('new_arrivals')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/discounts" className="text-white">
                                        {t('sale')}
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="mb-4">{t('customer_service')}</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/contact-us" className="text-white">
                                        {t('contact_us')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/faqs" className="text-white">
                                        {t('faqs')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/shipping" className="text-white">
                                        {t('shipping_returns')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/size-guide" className="text-white">
                                        {t('size_guide')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/track-order" className="text-white">
                                        {t('track_order')}
                                    </Link>
                                </li>
                            </ul>
                        </Col>

                        <Col md={3} sm={6} className="mb-4">
                            <h5 className="mb-4">{t('about_us')}</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <Link to="/about-us" className="text-white">
                                        {t('our_story')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/careers" className="text-white">
                                        {t('careers')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/sustainability" className="text-white">
                                      {t('sustainability')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/privacy-policy" className="text-white">
                                        {t('privacy_policy')}
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link to="/terms" className="text-white">
                                        {t('Terms_Conditions')}
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
