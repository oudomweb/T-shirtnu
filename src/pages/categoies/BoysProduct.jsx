import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";
// import { mockProducts } from "../../data/mockData"

const BoysProducts = () => {
    const boysProducts = DataProducts.slice(4, 8)

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Boys</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">Boys' T-Shirts</h1>

                <Row>
                    {boysProducts.map((product) => (
                        <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
                            <ProductCard product={product} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default BoysProducts;
