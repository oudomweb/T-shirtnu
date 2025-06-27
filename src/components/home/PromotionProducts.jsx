import {Container, Row, Col, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Khmer from "../../assets/img/khmer.png";
import Btb from "../../assets/img/btb.jpg";

const PromotionPro = () => {
  return (
    <section className="py-5 ">
      <Container>
        <Row className="g-4">
          <Col md={6}>
            <div
              className="promo-card position-relative overflow-hidden"
              style={{height: "400px"}}
            >
              <img
                src={Khmer}
                alt="Summer Sale"
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4"
                style={{background: "rgba(0,0,0,0.3)"}}
              >
                <div className="text-white">
                  <h3 className="fs-1 fw-bold mb-3">Summer Sale</h3>
                  <p className="mb-4">Up to 50% off on selected items</p>
                  <Link to="/discounts">
                    <Button variant="light">Shop Now</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          <Col md={6}>
            <div
              className="promo-card position-relative overflow-hidden"
              style={{height: "400px"}}
            >
              <img
                src={Btb}
                alt="New Collection"
                className="w-100 h-100 object-fit-cover"
              />
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-4"
                style={{background: "rgba(0,0,0,0.3)"}}
              >
                <div className="text-white">
                  <h3 className="fs-1 fw-bold mb-3">New Collection</h3>
                  <p className="mb-4">Check out our latest arrivals</p>
                  <p style={{color: "red"}} className=" fs-6">
                    Up to 50% off on selected items
                  </p>
                  <Link to="/products">
                    <Button variant="light">Discover</Button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PromotionPro;
