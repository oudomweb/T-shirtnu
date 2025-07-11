"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Button, Form, Tabs, Tab, Breadcrumb } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { FaHeart, FaShoppingCart, FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"
import {DataProducts} from "../data/Data.jsx";
import ProductCard from "../components/products/ProductCard.jsx";

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [mainImage, setMainImage] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedSize, setSelectedSize] = useState("")
    const [relatedProducts, setRelatedProducts] = useState([])

    // Fetch product data
    useEffect(() => {
        // Simulate API call
        setTimeout(() => {
            const foundProduct = DataProducts.find((p) => p.id.toString() === id)
            if (foundProduct) {
                setProduct(foundProduct)
                setMainImage(foundProduct.images[0])
                setSelectedColor(foundProduct.colors ? foundProduct.colors[0] : "")
                setSelectedSize(foundProduct.sizes ? foundProduct.sizes[0] : "")

                // Get related products
                const related = DataProducts
                    .filter((p) => p.id.toString() !== id && p.category === foundProduct.category)
                    .slice(0, 4)
                setRelatedProducts(related)
            }
            setLoading(false)
        }, 500)
    }, [id])

    const handleQuantityChange = (e) => {
        setQuantity(Number.parseInt(e.target.value))
    }

    const handleColorSelect = (color) => {
        setSelectedColor(color)
    }

    const handleSizeSelect = (size) => {
        setSelectedSize(size)
    }

    const handleAddToCart = () => {
        // Add to cart logic
        console.log("Added to cart:", {
            product,
            quantity,
            color: selectedColor,
            size: selectedSize,
        })
        alert("Product added to cart!")
    }

    const handleAddToWishlist = () => {
        // Add to wishlist logic
        console.log("Added to wishlist:", product)
        alert("Product added to wishlist!")
    }

    if (loading) {
        return (
            <Container className="py-5 text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </Container>
        )
    }

    if (!product) {
        return (
            <Container className="py-5 text-center">
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary mt-3">
                    Back to Products
                </Link>
            </Container>
        )
    }

    return (
        <div className="py-5">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb className="mb-4">
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/products" }}>
                        Products
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
                </Breadcrumb>

                <Row className="mb-5">
                    {/* Product Images */}
                    <Col md={6} className="mb-4 mb-md-0">
                        <Row>
                            <Col md={2} className="order-md-1 order-2">
                                <div className="product-gallery d-flex flex-md-column flex-row gap-2 mb-md-0 mb-3">
                                    {product.images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image || "/placeholder.svg"}
                                            alt={`${product.name} - view ${index + 1}`}
                                            className={`img-thumbnail ${mainImage === image ? "border-primary" : ""}`}
                                            onClick={() => setMainImage(image)}
                                        />
                                    ))}
                                </div>
                            </Col>
                            <Col md={10} className="order-md-2 order-1">
                                <div className="main-image-container position-relative mb-3 mb-md-0">
                                    <img
                                        src={mainImage || "/placeholder.svg"}
                                        alt={product.name}
                                        className="img-fluid product-main-image"
                                    />
                                    {product.isSale && (
                                        <span className="badge bg-danger position-absolute top-0 start-0 m-3">{product.discount}% OFF</span>
                                    )}
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    {/* Product Details */}
                    <Col md={6}>
                        <h1 className="mb-2">{product.name}</h1>

                        <div className="mb-3">
                            {product.originalPrice ? (
                                <div className="d-flex align-items-center">
                  <span className="text-decoration-line-through text-muted me-2">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                                    <span className="fs-3 fw-bold text-danger">${product.price.toFixed(2)}</span>
                                </div>
                            ) : (
                                <span className="fs-3 fw-bold">${product.price.toFixed(2)}</span>
                            )}
                        </div>

                        <p className="mb-4">{product.description}</p>

                        <div className="mb-4">
                            <h5 className="mb-3">Color</h5>
                            <div className="d-flex gap-2">
                                {product.colors &&
                                    product.colors.map((color, index) => (
                                        <div
                                            key={index}
                                            className={`color-option ${selectedColor === color ? "active" : ""}`}
                                            style={{
                                                backgroundColor: color,
                                                width: "30px",
                                                height: "30px",
                                                cursor: "pointer",
                                                border: selectedColor === color ? "2px solid #000" : "1px solid #ddd",
                                            }}
                                            onClick={() => handleColorSelect(color)}
                                            title={color}
                                        ></div>
                                    ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5 className="mb-3">Size</h5>
                            <div className="d-flex gap-2">
                                {product.sizes &&
                                    product.sizes.map((size, index) => (
                                        <div
                                            key={index}
                                            className={`size-option ${selectedSize === size ? "active" : ""}`}
                                            style={{
                                                padding: "8px 12px",
                                                border: "1px solid #ddd",
                                                cursor: "pointer",
                                                backgroundColor: selectedSize === size ? "#002a5c" : "transparent",
                                                color: selectedSize === size ? "white" : "inherit",
                                            }}
                                            onClick={() => handleSizeSelect(size)}
                                        >
                                            {size}
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <div className="mb-4">
                            <h5 className="mb-3">Quantity</h5>
                            <div className="d-flex align-items-center">
                                <Form.Select value={quantity} onChange={handleQuantityChange} style={{ width: "100px" }}>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </Form.Select>
                                <span className="ms-3">
                  {product.stock > 0 ? (
                      <span className="text-success">In Stock</span>
                  ) : (
                      <span className="text-danger">Out of Stock</span>
                  )}
                </span>
                            </div>
                        </div>

                        <div className="d-flex gap-3 mb-4">
                            <Button
                                variant="primary"
                                size="lg"
                                className="d-flex align-items-center"
                                onClick={handleAddToCart}
                                disabled={product.stock <= 0}
                            >
                                <FaShoppingCart className="me-2" /> Add to Cart
                            </Button>
                            <Button
                                variant="outline-secondary"
                                size="lg"
                                className="d-flex align-items-center"
                                onClick={handleAddToWishlist}
                            >
                                <FaHeart className="me-2" /> Wishlist
                            </Button>
                        </div>

                        <div className="mb-4 pb-4 border-bottom">
                            <div className="mb-2">
                                <strong>SKU:</strong> {product.sku}
                            </div>
                            <div className="mb-2">
                                <strong>Category:</strong> {product.category}
                            </div>
                            <div className="mb-2">
                                <strong>Tags:</strong> {product.tags && product.tags.join(", ")}
                            </div>
                        </div>

                        <div>
                            <h5 className="mb-3">Share:</h5>
                            <div className="d-flex gap-2">
                                <Button variant="outline-dark" size="sm" className="rounded-circle p-2">
                                    <FaFacebookF />
                                </Button>
                                <Button variant="outline-dark" size="sm" className="rounded-circle p-2">
                                    <FaTwitter />
                                </Button>
                                <Button variant="outline-dark" size="sm" className="rounded-circle p-2">
                                    <FaPinterest />
                                </Button>
                                <Button variant="outline-dark" size="sm" className="rounded-circle p-2">
                                    <FaInstagram />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Product Information Tabs */}
                <div className="mb-5">
                    <Tabs defaultActiveKey="description" className="mb-4">
                        <Tab eventKey="description" title="Description">
                            <div className="p-4">
                                <p>{product.fullDescription || product.description}</p>
                                <ul className="mt-3">
                                    <li>100% cotton material</li>
                                    <li>Comfortable fit</li>
                                    <li>Machine washable</li>
                                    <li>Imported</li>
                                </ul>
                            </div>
                        </Tab>
                        <Tab eventKey="additional" title="Additional Information">
                            <div className="p-4">
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <th style={{ width: "200px" }}>Material</th>
                                        <td>100% Cotton</td>
                                    </tr>
                                    <tr>
                                        <th>Fit</th>
                                        <td>Regular</td>
                                    </tr>
                                    <tr>
                                        <th>Care Instructions</th>
                                        <td>Machine wash cold, tumble dry low</td>
                                    </tr>
                                    <tr>
                                        <th>Country of Origin</th>
                                        <td>Imported</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                        <Tab eventKey="reviews" title="Reviews (3)">
                            <div className="p-4">
                                <div className="mb-4 pb-4 border-bottom">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h5>John Doe</h5>
                                        <div className="rating">★★★★★</div>
                                    </div>
                                    <p className="text-muted mb-2">Posted on May 10, 2023</p>
                                    <p>Great quality t-shirt! The material is soft and comfortable. Fits perfectly.</p>
                                </div>

                                <div className="mb-4 pb-4 border-bottom">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h5>Jane Smith</h5>
                                        <div className="rating">★★★★☆</div>
                                    </div>
                                    <p className="text-muted mb-2">Posted on April 28, 2023</p>
                                    <p>
                                        Nice t-shirt, good quality. The color is slightly different from what I expected, but still looks
                                        good.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <div className="d-flex justify-content-between mb-2">
                                        <h5>Mike Johnson</h5>
                                        <div className="rating">★★★★★</div>
                                    </div>
                                    <p className="text-muted mb-2">Posted on April 15, 2023</p>
                                    <p>Excellent product! Fast shipping and the quality is top-notch. Will definitely buy again.</p>
                                </div>

                                <Button variant="primary" className="mt-3">
                                    Write a Review
                                </Button>
                            </div>
                        </Tab>
                    </Tabs>
                </div>

                {/* Related Products */}
                <div>
                    <h3 className="mb-4">You May Also Like</h3>
                    <Row>
                        {relatedProducts.map((product) => (
                            <Col sm={6} md={3} key={product.id}>
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default ProductDetail
