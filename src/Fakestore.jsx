import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Fakestore() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const getDetails = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDetails();
  }, []);
  console.log(data);
  const handleClick = (id) => {
    setShow(id);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setTitle("");
    setData(
      data.filter((product) =>
        product.title.toLowerCase().includes(title.toLowerCase())
      )
    );
  };
  const handleAddToCart = (productId) => {
    console.log(`Product added to cart: ${productId}`);
    toast.success("Product added to cart");
  };
  const handleBuyNow = (productId) => {
    console.log(`Product Bought: ${productId}`);
    toast.success("Product bought successfully!");
  };

  return (
    <div>
      <h1 id="head">Fakestore</h1>
      <div>
        <form onSubmit={handleSearch} id="heading">
          <input
            type="text"
            name="title"
            placeholder="Enter Item Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button id="two" type="submit">
            search
          </button>
        </form>
      </div>

      <div className="box-container">
        {data.map((product) => (
          <div className="item-section">
            <div>
              <div className="item-section__image">
                <img
                  className="image-content"
                  src={product.image}
                  alt=""
                  style={{ width: "150px" }}
                />
              </div>
              <h3 id="product-name">{product.title}</h3>
              <p id="price">{product.price}</p>
              <div className="button-container">
                <button
                  onClick={() => handleAddToCart(product.id)}
                  className="add-to-cart-button"
                >
                  ADD TO CART
                </button>
                <button
                  onClick={() => handleBuyNow(product.id)}
                  className="buy-now-button"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fakestore;
