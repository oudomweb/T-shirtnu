import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const CategorySection = () => {
    const categories = [
        {
            id: 1,
            name: "Men",
            image: "/images/category-men.jpg",
            link: "/men",
        },
        {
            id: 2,
            name: "Women",
            image: "/images/category-women.jpg",
            link: "/women",
        },
        {
            id: 3,
            name: "Boys",
            image: "/images/category-boys.jpg",
            link: "/boys",
        },
        {
            id: 4,
            name: "Girls",
            image: "/images/category-girls.jpg",
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

export default CategorySection
