import { useContext, useState } from "react";
import "./Products.css";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Products() {
  const [addedId, setAddedId] = useState(null);

  const customProducts = [
  {
    id: 1,
    title: "Chelsea Boots",
    price: 4999,
    image: "/images/chelsea.jpg",
    description: "Classic Chelsea boots with premium leather finish"
  },
  {
    id: 2,
    title: "Converse Chuck 70's",
    price: 2999,
    image: "/images/converse.jpg",
    description: "Iconic street-style sneakers for everyday wear"
  },
  {
    id: 3,
    title: "Alexander McQueen",
    price: 15999,
    image: "/images/mcqueen.jpg",
    description: "Luxury oversized sneakers with bold design"
  },
  {
    id: 4,
    title: "Adidas Sambas",
    price: 7999,
    image: "/images/sambas.jpg",
    description: "Timeless classic with modern comfort"
  },
  {
    id: 5,
    title: "Nike Air Max",
    price: 9999,
    image: "/images/nikes.jpg",
    description: "Performance sneakers with maximum cushioning"
  },
  {
    id: 6,
    title: "Classic Loafers",
    price: 3999,
    image: "/images/loafers.jpg",
    description: "Elegant loafers perfect for formal occasions"
  },
  {
    id: 7,
    title: "Onitsuka Tigers",
    price: 6999,
    image: "/images/tigers.jpg",
    description: "Retro-inspired sneakers with modern comfort"
  },
  {
    id: 8,
    title: "Leather Boots",
    price: 8999,
    image: "/images/boots.jpg",
    description: "Durable boots built for rugged style and high sole"
  },
  {
    id: 9,
    title: "Nike Air Force",
    price: 10999,
    image: "/images/airforce.jpg",
    description: "Legendary sneakers with clean and bold design"
  },
  {
    id: 10,
    title: "Brown Chelsea",
    price: 5499,
    image: "/images/brownChelsea.jpg",
    description: "Stylish brown boots for casual and semi-formal wear"
  },
  {
    id: 11,
    title: "Chuck Taylor",
    price: 3299,
    image: "/images/blackConverse.jpg",
    description: "Classic black sneakers that never go out of style"
  },
  {
    id: 12,
    title: "Blue Jordans",
    price: 12999,
    image: "/images/blueJordans.jpg",
    description: "Premium basketball sneakers with iconic design"
  },
  {
    id: 13,
    title: "White McQueen",
    price: 16499,
    image: "/images/whitemcqueen.jpg",
    description: "Luxury white sneakers with signature style"
  },
  {
    id: 14,
    title: "Charles Louboutin",
    price: 18999,
    image: "/images/loubotin.jpg",
    description: "High-end designer sneakers with red sole touch"
  },
  {
    id: 15,
    title: "Nike Sacai",
    price: 13999,
    image: "/images/sacai.jpg",
    description: "Layered design sneakers with futuristic style"
  },
  {
    id: 16,
    title: "Brown Boots",
    price: 8499,
    image: "/images/brownBoots.jpg",
    description: "Strong and stylish boots for all terrains"
  },
  {
    id: 17,
    title: "Chukka Boots",
    price: 5999,
    image: "/images/chuka.jpg",
    description: "Minimalist boots with clean and elegant look"
  },
  {
    id: 18,
    title: "Travis Scott Jordans",
    price: 19999,
    image: "/images/travisScott.jpg",
    description: "Limited edition sneakers with unique reverse swoosh"
  },
  {
    id: 19,
    title: "Air Jordans",
    price: 14999,
    image: "/images/jordans.jpg",
    description: "Classic basketball sneakers with premium feel"
  },
  {
    id: 20,
    title: "White Sambas",
    price: 8299,
    image: "/images/whiteSambas.jpg",
    description: "Clean and minimal sneakers for everyday style"
  }
];

  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!user) {
      alert("Please login first");
      navigate("/register");
      return;
    }

    addToCart(product);

    setAddedId(product.id);

    setTimeout(() => {
      setAddedId(null);
    }, 1000);
  };



  return (
    <>
      <h1>Products</h1>

      <div className="products-container">
        <div className="products-row">
          {customProducts.map((product) => (
            <div key={product.id} className="products-col">
              <img
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                loading="lazy"
              />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h4>₹{product.price}</h4>

              <button
                className="addCart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <div
                className={`item-added ${addedId === product.id ? "show" : ""}`}
              >
                Item added to cart ✅
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
