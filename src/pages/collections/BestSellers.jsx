import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";

const BestSellers = () => {
    const bestSellerProducts = DataProducts.filter((product) => product.isBestSeller)

    return (
        <div className="py-5">
            <Container>
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/products" }}>
                        Products
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Best Sellers</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">Best Sellers</h1>

                <Row>
                    {bestSellerProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default BestSellers
