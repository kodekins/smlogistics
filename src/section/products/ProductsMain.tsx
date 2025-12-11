import React, { useState } from "react";
import { Link } from "react-router-dom";
import PriceRanger from "../../components/elements/PriceRanger";

// Import all product images
import Product1 from "../../assets/images/shop/shop-product-1-1.jpg";
import Product2 from "../../assets/images/shop/shop-product-1-2.jpg";
import Product3 from "../../assets/images/shop/shop-product-1-3.jpg";
import Product4 from "../../assets/images/shop/shop-product-1-4.jpg";
import Product5 from "../../assets/images/shop/shop-product-1-5.jpg";
import Product6 from "../../assets/images/shop/shop-product-1-6.jpg";
import Product7 from "../../assets/images/shop/shop-product-1-7.jpg";
import Product8 from "../../assets/images/shop/shop-product-1-8.jpg";
import Product9 from "../../assets/images/shop/shop-product-1-9.jpg";

// Import recent product thumbnails
import Thumb1 from "../../assets/images/shop/product-thumb-1.jpg";
import Thumb2 from "../../assets/images/shop/product-thumb-2.jpg";
import Thumb3 from "../../assets/images/shop/product-thumb-3.jpg";
import Thumb4 from "../../assets/images/shop/product-thumb-4.jpg";

// Product data with imported images
const productItems = [
  {
    id: 1,
    image: Product1,
    name: "Classy chair",
    price: 33.0,
  },
  {
    id: 2,
    image: Product2,
    name: "Comfy chair",
    price: 68.0,
  },
  {
    id: 3,
    image: Product3,
    name: "Boss chair",
    price: 23.0,
  },
  {
    id: 4,
    image: Product4,
    name: "Sofa chair",
    price: 54.0,
  },
  {
    id: 5,
    image: Product5,
    name: "Wooden stool",
    price: 39.0,
  },
  {
    id: 6,
    image: Product6,
    name: "Big sofa",
    price: 44.0,
  },
  {
    id: 7,
    image: Product7,
    name: "Round chair",
    price: 96.0,
  },
  {
    id: 8,
    image: Product8,
    name: "Big stool",
    price: 23.0,
  },
  {
    id: 9,
    image: Product9,
    name: "Classic chair",
    price: 33.0,
  },
];

const ProductSection = () => {
  const [currentValue, setValue] = useState("1");
  const handleSearch = (e) => {
    e.preventDefault();
    const Search = e.target.search.value;
  };
  return (
    <section className="product">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-12">
            <div className="product__sidebar">
              {/* Search Form */}
              <div className="shop-search product__sidebar-single">
                <form onSubmit={handleSearch}>
                  <input type="text" name="search" placeholder="Search" />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              {/* Price Range Filter */}
              <PriceRanger />

              {/* Categories */}
              <div className="shop-category product__sidebar-single">
                <h3 className="product__sidebar-title">Categories</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#">Make a Donation</Link>
                  </li>
                  <li className="active">
                    <Link to="#">Make World Happier</Link>
                  </li>
                  <li>
                    <Link to="#">Education For People</Link>
                  </li>
                  <li>
                    <Link to="#">Food & Build Home</Link>
                  </li>
                  <li>
                    <Link to="#">Environtment Recyle</Link>
                  </li>
                </ul>
              </div>

              {/* Color Options */}
              <div className="shop-color-option product__sidebar-single">
                <h3 className="product__sidebar-title">Color Option</h3>
                <ul className="list-unstyled">
                  <li>Black</li>
                  <li>Blue</li>
                  <li>Brown</li>
                  <li>Pink</li>
                  <li>Orange</li>
                </ul>
              </div>

              {/* Recent Products */}
              <div className="shop-product-recent-products product__sidebar-single">
                <h3 className="product__sidebar-title">Recent Products</h3>
                <ul className="clearfix">
                  <li>
                    <div className="img">
                      <img src={Thumb1} alt="Product" />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">Classy chair</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$33.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img src={Thumb2} alt="Product" />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">Wooden stool</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$39.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img src={Thumb3} alt="Product" />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">Sofa chair</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$54.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="img">
                      <img src={Thumb4} alt="Product" />
                      <Link to="#">
                        <i className="fa fa-link" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="title">
                        <h5>
                          <Link to="#">Big sofa</Link>
                        </h5>
                      </div>
                      <div className="price">
                        <p>$44.00</p>
                      </div>
                      <div className="review">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star color"></i>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Product Tags */}
              <div className="shop-product-tags product__sidebar-single">
                <h3 className="product__sidebar-title">Product Tags</h3>
                <div className="shop-product__tags-list">
                  <Link to="#">Art</Link>
                  <Link to="#">Decor</Link>
                  <Link to="#">Design</Link>
                  <Link to="#">Electronix</Link>
                  <Link to="#">Envato</Link>
                  <Link to="#">Destination</Link>
                </div>
              </div>

              {/* Reviews */}
              <div className="shop-product-tags product__sidebar-single style">
                <h3 className="product__sidebar-title">Reviews</h3>
                <div className="sidebar-rating-box sidebar-rating-box--style2">
                  <ul>
                    <li>
                      <input
                        type="radio"
                        id="fivestar"
                        name="rating"
                        defaultChecked
                      />
                      <label htmlFor="fivestar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="fourstar" name="rating" />
                      <label htmlFor="fourstar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="threestar" name="rating" />
                      <label htmlFor="threestar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="twostar" name="rating" />
                      <label htmlFor="twostar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                    <li>
                      <input type="radio" id="onestar" name="rating" />
                      <label htmlFor="onestar">
                        <i></i>
                        <span className="icon-star"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                        <span className="icon-star gray"></span>
                      </label>
                    </li>
                    {/* Other rating options would go here */}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9 col-lg-12">
            <div className="product__items">
              <div className="row">
                <div className="col-xl-12">
                  <div className="product__showing-result">
                    <div className="product__showing-text-box">
                      <p className="product__showing-text">
                        Showing 1–9 of 12 results
                      </p>
                    </div>
                    <div className="product__showing-sort">
                      <div className="select-box">
                        <select
                          value={currentValue}
                          onChange={(e) => setValue(e.target.value)}
                          className="nice-select wide"
                        >
                          {/* <option value={"Sort"}>Sort by popular</option> */}
                          <option value="1">Sort by popular</option>
                          <option value="2">Sort by Price</option>
                          <option value="3">Sort by Ratings</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="product__all">
                <div className="row">
                  {productItems.map((product) => (
                    <div
                      className="col-xl-4 col-lg-4 col-md-6"
                      key={product.id}
                    >
                      <div className="product__all-single">
                        <div className="product__all-img">
                          <img src={product.image} alt={product.name} />
                          <img src={product.image} alt={product.name} />
                        </div>
                        <div className="product__all-content">
                          <div className="product__all-review">
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                            <i className="icon-star"></i>
                          </div>
                          <h4 className="product__all-title">
                            <Link to="/product-details">{product.name}</Link>
                          </h4>
                          <p className="product__all-price">
                            ${product.price.toFixed(2)}
                          </p>
                          <div className="product__all-btn-box">
                            <Link
                              className="thm-btn product__all-btn"
                              to="/cart"
                            >
                              Add to Cart
                              <span className="hover-btn hover-bx"></span>
                              <span className="hover-btn hover-bx2"></span>
                              <span className="hover-btn hover-bx3"></span>
                              <span className="hover-btn hover-bx4"></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
