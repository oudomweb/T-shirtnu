import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";
const PopularProducts = () => {
    // Filter for popular products (using isBestSeller as a proxy for popularity)
    const popularProducts = DataProducts.filter((product) => product.isBestSeller)

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/products" }}>
                        Products
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Popular Products</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">Popular Products</h1>

                <Row>
                    {popularProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default PopularProducts;
