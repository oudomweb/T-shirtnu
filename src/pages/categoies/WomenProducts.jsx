import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import { Link } from "react-router-dom"
import {DataProducts} from "../../data/Data.jsx";
import ProductCard from "../../components/products/ProductCard.jsx";
import { useTranslation } from "../../store/translation.js";

const WomenProducts = () => {
    // In a real app, you would filter products by gender/category
    // For this demo, we'll just use a subset of the mock products
         const { language, setLanguage, t } = useTranslation();

    const womenProducts = DataProducts.slice(2, 10)

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        {t('home')}
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{t('women')}</Breadcrumb.Item>
                </Breadcrumb>

                <h1 className="mb-5">{t('womens_shirt')}</h1>

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
