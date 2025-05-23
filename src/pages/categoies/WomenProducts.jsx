import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";

const WomenProducts = () => {
    // In a real app, you would filter products by gender/category
    // For this demo, we'll just use a subset of the mock products
    const womenProducts = DataProducts.slice(2, 10)

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Women</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">Women's T-Shirts</h1>

                <Row>
                    {womenProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default WomenProducts
