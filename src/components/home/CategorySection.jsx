import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Khmer from "../../assets/img/khmer.png";
import Nang from  "../../assets/img/nang1.jpg";
import FontN from  "../../assets/img/frontt.png";
import Btb from  "../../assets/img/btb.jpg";
const CategorySection = () => {
    const categories = [
        {
            id: 1,
            name: "Men",
            image: Khmer,
            link: "/men",
        },
        {
            id: 2,
            name: "Women",
            image: Nang,
            link: "/women",
        },
        {
            id: 3,
            name: "Boys",
            image: FontN,
            link: "/boys",
        },
        {
            id: 4,
            name: "Girls",
            image: Btb,
            link: "/girls",
        },
    ]

    return (
        <section className="py-5">
            <Container>
                <h2 className="text-center mb-5">Shop By Category</h2>
                <Row>
                    {categories.map((category) => (
                            <Col md={6} lg={3} key={category.id} className="mb-4">
                            <Link to={category.link}>
                                <div className="category-card">
                                    <img src={category.image || "/placeholder.svg"} alt={category.name} className="img-fluid" />
                                    <div className="category-overlay">
                                        <h3 className="category-title">{category.name}</h3>
                                        <p>Shop Now</p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default CategorySection;
