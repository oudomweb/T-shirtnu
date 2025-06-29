"use client";

import {useState} from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Breadcrumb,
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {resetForm, setFormField} from "./profile/slice_action/formSlice";

const ContactUs = () => {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     phone: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  const formField = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    // const {name, value} = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
    dispatch(setFormField({field: e.target.name, value: e.target.value}));
  };
  const sendMessageToTelegram = async (formData) => {
    const botToken = "7699588684:AAE-fSKagy-PkOcyG40mewURjuEISQLff9g";
    const chatId = 1200612758;

    const message = `
📬 Client New Message:
👤 Name: ${formField.name}
📞 Phone: ${formField.phone}
📧 Email: ${formField.email}
📌 Subject: ${formField.subject}
📝 Message: ${formField.message}
        `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      await sendMessageToTelegram(formField);
      alert("✅ Thank you for your message! We will get back to you soon.");
    }

    // setValidated(true);
  };

  return (
    <div>
      <div className="bg-dark text-white py-5">
        <Container className="text-center">
          <h1 className="display-4 mb-4">Contact Us</h1>
          <Breadcrumb className="justify-content-center bg-transparent">
            <Breadcrumb.Item
              linkAs={Link}
              linkProps={{to: "/"}}
              className="text-white-50"
            >
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="text-white">
              Contact Us
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>

      <section className="py-5">
        <Container>
          <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
              <h2 className="mb-4">Get In Touch</h2>
              <p className="mb-4">
                We'd love to hear from you! Whether you have a question about
                our products, need help with an order, or want to collaborate
                with us, our team is here to assist you.
              </p>

              <div className="contact-info">
                <div className="d-flex mb-4">
                  <div className="me-3">
                    <FaMapMarkerAlt size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-1">Location </h5>
                    <p className="mb-0">Keo Chenda St, Phnom Penh 12000</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <FaPhone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-1">Phone Number</h5>
                    <p className="mb-0">+855 962 089 546</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <FaEnvelope size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-1">Email Address</h5>
                    <p className="mb-0">oudomngoun29@gmail.com</p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="me-3">
                    <FaClock size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="mb-1">Working Hours</h5>
                    <p className="mb-0">Monday - Sunday: 24/7</p>
                    {/*<p className="mb-0">Saturday: 10:00 AM - 4:00 PM</p>*/}
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-lg-5">
                  <h3 className="mb-4">Send Us a Message</h3>

                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="name">
                          <Form.Label>Name : </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formField.name}
                            onChange={handleChange}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group controlId="Phone">
                          <Form.Label>Phone Number : </Form.Label>
                          <Form.Control
                            type="text"
                            name="phone"
                            value={formField.phone}
                            onChange={handleChange}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide your name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group controlId="email">
                          <Form.Label>Email : </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formField.email}
                            onChange={handleChange}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="subject">
                      <Form.Label>Subject : </Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formField.subject}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a subject.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="message">
                      <Form.Label> Message : </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formField.message}
                        onChange={handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide your message.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" size="lg">
                      Send Message
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Find Us On The Map</h2>
          <div className="map-container d-flex justify-content-center">
            <iframe
              title="Norton University Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.495411924513!2d104.92840535509767!3d11.588362294022463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310953fd9f9a51e9%3A0xc26eafcd2ed5ca29!2sNorton%20University!5e0!3m2!1sen!2skh!4v1748421401478!5m2!1sen!2skh"
              width="100%"
              height="450"
              style={{border: 0}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactUs;
