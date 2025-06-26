import CategorySection from "../components/home/CategorySection";
import {Container, Row, Col, Card} from "react-bootstrap";
import {
  FaShippingFast,
  FaUndo,
  FaHeadset,
  FaCreditCard,
  FaInstagram,
} from "react-icons/fa";
import Silder from "../components/home/Silder.jsx";
import FeaturedProducts from "../components/home/FeatureProduct.jsx";
import PromotionPro from "../components/home/PromotionProducts.jsx";
import Khmer from "../assets/img/khmer.png";
import Btb from "../assets/img/btb.jpg";
import Newkh from "../assets/img/Newkh.png";

const HomePage = () => {
  const KhmerImages = [Khmer, Btb, Newkh];
  const features = [
    {
      icon: <FaShippingFast size={30} />,
      title: "Free Shipping",
      description: "On all orders over $50",
    },
    {
      icon: <FaUndo size={30} />,
      title: "Easy Returns",
      description: "30 days return policy",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "24/7 Support",
      description: "Customer support",
    },
    {
      icon: <FaCreditCard size={30} />,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
  ];

  return (
    <div>
      <Silder />
      <section className="py-5">
        <Container>
          <Row>
            {features.map((feature, index) => (
              <Col md={3} sm={6} key={index} className="mb-4 mb-md-0">
                <Card className="border-0 text-center h-100 py-4">
                  <Card.Body>
                    <div className="mb-3 text-primary icon-card-id">
                      {feature.icon}
                    </div>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <CategorySection />
      <FeaturedProducts />
      <PromotionPro />

      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5">Follow Us on Instagram</h2>
          <Row className="g-2">
            {/*{[1, 2, 3, 4, 5, 6].map((item) => (*/}
            {/*    <Col md={2} sm={4} xs={6} key={item}>*/}
            {/*        <div className="instagram-item position-relative overflow-hidden">*/}
            {/*            <img src={KhmerImages[item - 1]} alt={`Instagram post ${item}`} className="img-fluid" />*/}
            {/*            /!*<img src={`/assets/img/khmer${item}.png`} alt={`Instagram post ${item}`} className="img-fluid" />*!/*/}
            {/*            /!*<img src={Khmer${item}} alt={`Instagram post ${item}`} className="img-fluid" /> *!/*/}
            {/*            <div className="instagram-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">*/}
            {/*                <a href="#" className="text-primary-emphasis">*/}
            {/*                    /!*<i className="fab fa-instagram fa-2x"></i>*!/*/}
            {/*                    <FaInstagram size={24} />*/}
            {/*                </a>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*))}*/}

            {KhmerImages.map((imgSrc, index) => (
              <Col md={2} sm={4} xs={6} key={index}>
                {/*<div className="instagram-item position-relative overflow-hidden">*/}
                {/*    <img src={imgSrc} alt={`Instagram post ${index + 1}`} className="img-fluid" />*/}
                {/*    <div className="instagram-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center">*/}
                {/*        <a href="#" className="text-dark border-3  rounded-circle p-2">*/}
                {/*            <FaInstagram size={24} />*/}
                {/*        </a>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="instagram-item position-relative overflow-hidden">
                  <img
                    src={imgSrc}
                    alt={`Instagram post ${index + 1}`}
                    className="img-fluid"
                  />
                  <div
                    className="instagram-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{background: "rgba(255,255,255,0.6)", zIndex: 1}}
                  >
                    <a href="#" style={{color: "#000"}}>
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
