import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import ProductCard from "../../components/products/ProductCard.jsx";
import {DataProducts} from "../../data/Data.jsx";

const GirlsProducts = () => {
    // In a real app, you would filter products by gender/category
    // For this demo, we'll just use a subset of the mock products
    const girlsProducts = DataProducts.slice(6, 10)

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Girls</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">Girls' T-Shirts</h1>

                <Row>
                    {girlsProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default GirlsProducts
