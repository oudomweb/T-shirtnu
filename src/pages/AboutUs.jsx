import React from "react";
import "../assets/style/malorn.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="hero-title">About Our Story</h1>
              <p className="hero-subtitle">
                Discover the passion and dedication behind T-Shirt Shop - your
                premier destination for premium quality apparel that combines
                style, comfort, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h2 className="section-title">Our Journey</h2>
              <p className="lead-custom mb-4">
                Founded in 2018, T-Shirt Shop began as a small dream to create
                high-quality, comfortable t-shirts that people would love to
                wear every day. What started in a small studio has grown into a
                trusted brand serving customers worldwide.
              </p>
              <p className="lead-custom mb-4">
                We believe that great clothing should be accessible to everyone.
                That's why we've dedicated ourselves to creating premium
                t-shirts using the finest materials, innovative designs, and
                sustainable practices.
              </p>
              <p className="lead-custom">
                Our commitment goes beyond just selling t-shirts - we're
                building a community of people who appreciate quality, style,
                and responsible fashion choices.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image-container">
                <i className="fas fa-tshirt about-main-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Our Core Values</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-medal value-icon"></i>
                  <h4 className="card-title mb-3">Premium Quality</h4>
                  <p className="card-text">
                    We use only the finest materials and employ rigorous quality
                    control to ensure every t-shirt meets our high standards for
                    comfort and durability.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-leaf value-icon"></i>
                  <h4 className="card-title mb-3">Sustainability</h4>
                  <p className="card-text">
                    Environmental responsibility is at the heart of our
                    business. We use eco-friendly materials and sustainable
                    manufacturing processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-palette value-icon"></i>
                  <h4 className="card-title mb-3">Creative Design</h4>
                  <p className="card-text">
                    Our talented design team creates unique, trendy designs that
                    allow you to express your personality and style with
                    confidence.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-heart value-icon"></i>
                  <h4 className="card-title mb-3">Customer Care</h4>
                  <p className="card-text">
                    Your satisfaction is our priority. We provide exceptional
                    customer service and stand behind every product we sell.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-shipping-fast value-icon"></i>
                  <h4 className="card-title mb-3">Fast Delivery</h4>
                  <p className="card-text">
                    We understand you're excited to receive your new t-shirts.
                    That's why we offer fast, reliable shipping worldwide.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card value-card p-4 text-center">
                <div className="card-body">
                  <i className="fas fa-dollar-sign value-icon"></i>
                  <h4 className="card-title mb-3">Fair Pricing</h4>
                  <p className="card-text">
                    Quality shouldn't break the bank. We offer competitive
                    prices without compromising on the quality you deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">Meet Our Team</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card team-card p-4 text-center">
                <div className="card-body">
                  <div className="team-avatar">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <h5 className="card-title mb-2">Alex Johnson</h5>
                  <p className="card-text text-primary fw-bold">
                    Founder & CEO
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card team-card p-4 text-center">
                <div className="card-body">
                  <div className="team-avatar">
                    <i className="fas fa-paint-brush"></i>
                  </div>
                  <h5 className="card-title mb-2">Sarah Chen</h5>
                  <p className="card-text text-primary fw-bold">
                    Head of Design
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card team-card p-4 text-center">
                <div className="card-body">
                  <div className="team-avatar">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <h5 className="card-title mb-2">Mike Rodriguez</h5>
                  <p className="card-text text-primary fw-bold">
                    Production Manager
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card team-card p-4 text-center">
                <div className="card-body">
                  <div className="team-avatar">
                    <i className="fas fa-headset"></i>
                  </div>
                  <h5 className="card-title mb-2">Emma Wilson</h5>
                  <p className="card-text text-primary fw-bold">
                    Customer Success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section section-padding">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-number">50k+</div>
              <p className="mb-0 fs-5">Happy Customers</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-number">200+</div>
              <p className="mb-0 fs-5">Unique Designs</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="stat-number">5+</div>
              <p className="mb-0 fs-5">Years Experience</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-number">99%</div>
              <p className="mb-0 fs-5">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-light-custom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="section-title">Our Mission</h2>
              <p className="lead-custom fs-4 mb-4">
                "To create premium quality t-shirts that bring comfort, style,
                and confidence to people's everyday lives while maintaining our
                commitment to sustainability and ethical business practices."
              </p>
              <div className="row mt-5">
                <div className="col-md-4 mb-3">
                  <i className="fas fa-award fs-1 text-primary mb-3"></i>
                  <h5>Quality First</h5>
                  <p className="text-muted">
                    Every product meets our strict quality standards
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-globe fs-1 text-success mb-3"></i>
                  <h5>Global Reach</h5>
                  <p className="text-muted">
                    Serving customers in over 50 countries worldwide
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <i className="fas fa-handshake fs-1 text-warning mb-3"></i>
                  <h5>Trust & Integrity</h5>
                  <p className="text-muted">
                    Building lasting relationships with our customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <h2 className="section-title">Join Our Community</h2>
              <p className="lead-custom mb-4">
                Be part of our growing family of satisfied customers. Experience
                the difference of premium quality t-shirts designed with passion
                and crafted with care.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-primary btn-lg px-4">
                  <i className="fas fa-shopping-cart me-2"></i>
                  Shop Now
                </button>
                <button className="btn btn-outline-primary btn-lg px-4">
                  <i className="fas fa-envelope me-2"></i>
                  Contact Us
                </button>
              </div>

              {/* Social Links */}
              <div className="mt-5">
                <h5 className="mb-3">Follow Us</h5>
                <div className="d-flex justify-content-center gap-3">
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{width: "50px", height: "50px"}}
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{width: "50px", height: "50px"}}
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{width: "50px", height: "50px"}}
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-lg rounded-circle"
                    style={{width: "50px", height: "50px"}}
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
