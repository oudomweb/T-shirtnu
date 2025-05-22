import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../products/ProductCard.jsx";

const FeaturedProducts = () => {
    // Filter products by category
    const newArrivals = DataProducts.filter((product) => product.isNew)
    const bestSellers = DataProducts.filter((product) => product.isBestSeller)
    const featured = DataProducts.filter((product) => product.isFeatured)

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-5">Featured Products</h2>

                <Tab.Container defaultActiveKey="new-arrivals">
                    <Nav className="justify-content-center mb-5">
                        <Nav.Item>
                            <Nav.Link eventKey="new-arrivals" className="px-4">
                                New Arrivals
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="best-sellers" className="px-4">
                                Best Sellers
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="featured" className="px-4">
                                Featured
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="new-arrivals">
                            <Row>
                                {newArrivals.slice(0, 8).map((product) => (
                                    <Col sm={6} md={4} lg={3} key={product.id}>
                                        <ProductCard product={product} />
                                    </Col>
                                ))}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="best-sellers">
                            <Row>
                                {bestSellers.slice(0, 8).map((product) => (
                                    <Col sm={6} md={4} lg={3} key={product.id}>
                                        <ProductCard product={product} />
                                    </Col>
                                ))}
                            </Row>
                        </Tab.Pane>

                        <Tab.Pane eventKey="featured">
                            <Row>
                                {featured.slice(0, 8).map((product) => (
                                    <Col sm={6} md={4} lg={3} key={product.id}>
                                        <ProductCard product={product} />
                                    </Col>
                                ))}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container>
        </section>
    )
}

export default FeaturedProducts
