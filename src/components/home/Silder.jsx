"use client";
import {useState} from "react";
import {Carousel, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import Khmer from "../../assets/img/khmer.png";
import Btb from "../../assets/img/btb.jpg";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      image: Khmer,
      title: "Summer Collection 2023",
      subtitle: "New Arrivals",
      description:
        "Discover our latest collection of premium t-shirts for the summer season.",
      buttonText: "Shop Now",
      buttonLink: "/products",
      align: "left",
    },
    {
      image: Btb,
      title: "Special Discount",
      subtitle: "Limited Time Offer",
      description:
        "Get up to 50% off on selected items. Don't miss out on these amazing deals!",
      buttonText: "View Offers",
      buttonLink: "/discounts",
      align: "center",
    },
    {
      image: Khmer,
      title: "Premium Quality",
      subtitle: "Comfort Guaranteed",
      description:
        "Our t-shirts are made with the finest materials for ultimate comfort and durability.",
      buttonText: "Learn More",
      buttonLink: "/about-us",
      align: "right",
    },
  ];

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className="hero-slider"
      fade
    >
      {slides.map((slide, idx) => (
        <Carousel.Item
          key={idx}
          className="hero-section"
          style={{backgroundImage: `url(${slide.image})`}}
        >
          <Container
            className={`d-flex justify-content-${
              slide.align === "left"
                ? "start"
                : slide.align === "right"
                ? "end"
                : "center"
            } align-items-center h-100`}
          >
            <div className="hero-content" style={{maxWidth: "500px"}}>
              <p className="text-uppercase mb-2">{slide.subtitle}</p>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="mb-4">{slide.description}</p>
              <Link to={slide.buttonLink}>
                <Button variant="primary" size="lg" className="learn-more">
                  {slide.buttonText}
                </Button>
              </Link>
            </div>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
