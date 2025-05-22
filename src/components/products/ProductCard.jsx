import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const ProductCard = ({ product }) => {
    const { id, name, price, originalPrice, images, isNew, isSale, discount } = product

    return (
        <Card className="product-card border-0 h-100">
            <div className="card-img-container">
                <Link to={`/product/${id}`}>
                    <Card.Img variant="top" src={images[0]} alt={name} />
                    {images.length > 1 && (
                        <div className="hover-image position-absolute top-0 start-0 w-100 h-100 opacity-0">
                            <img
                                src={images[1] || "/placeholder.svg"}
                                alt={`${name} - alternate view`}
                                className="w-100 h-100 object-fit-cover"
                                style={{ opacity: 0, position: "absolute", top: 0, left: 0 }}
                            />
                        </div>
                    )}
                </Link>

                {/* Product badges */}
                <div className="position-absolute top-0 start-0 p-2">
                    {isNew && <span className="badge bg-primary me-2">New</span>}
                    {isSale && <span className="badge bg-danger">{discount}% OFF</span>}
                </div>

                {/* Hover overlay with quick actions */}
                <div className="hover-overlay">
                    <Button variant="link" className="text-white p-1">
                        <FaShoppingCart /> Add to Cart
                    </Button>
                    <Button variant="link" className="text-white p-1">
                        <FaHeart /> Wishlist
                    </Button>
                    <Button variant="link" className="text-white p-1">
                        <FaEye /> Quick View
                    </Button>
                </div>
            </div>

            <Card.Body className="px-0 pt-3">
                <Link to={`/product/${id}`}>
                    <Card.Title className="h6">{name}</Card.Title>
                </Link>
                <div className="d-flex align-items-center mt-2">
                    {originalPrice && <span className="original-price">${originalPrice.toFixed(2)}</span>}
                    <span className="price">${price.toFixed(2)}</span>
                </div>

                {/* Color options preview */}
                {product.colors && (
                    <div className="color-options mt-2">
                        {product.colors.map((color, index) => (
                            <span key={index} className="color-option" style={{ backgroundColor: color }} title={color}></span>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProductCard;
