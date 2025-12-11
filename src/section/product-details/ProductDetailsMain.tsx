
import { useState } from "react";
import { Link } from 'react-router-dom';
import ProductDetailsImg from '../../assets/images/shop/product-details-img-1.jpg';
import ReviewImg1 from '../../assets/images/shop/review-1-1.jpg';
import ReviewImg2 from '../../assets/images/shop/review-1-2.jpg';

const ProductPage = () => {


  const [quantity, setQuantity] = useState(1);
  const [inputValue, setInputValue] = useState("1");

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setInputValue(newQuantity.toString());
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setInputValue(newQuantity.toString());
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Parse the input value
    const numericValue = parseInt(value, 10);

    // Update quantity if it's a valid positive number
    if (!isNaN(numericValue) && numericValue > 0) {
      setQuantity(numericValue);
    }
  };

  const handleInputBlur = () => {
    // If input is empty or invalid, reset to current quantity
    if (inputValue === "" || isNaN(parseInt(inputValue, 10)) || parseInt(inputValue, 10) < 1) {
      setInputValue(quantity.toString());
    } else {
      // Ensure the quantity state matches the input
      const numericValue = parseInt(inputValue, 10);
      setQuantity(numericValue);
      setInputValue(numericValue.toString());
    }
  };


  return (
    <>
      {/* Product Details Section */}
      <section className="product-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="product-details__img">
                <img src={ProductDetailsImg} alt="Custom T-shirts" />
              </div>
            </div>

            <div className="col-lg-6 col-xl-6">
              <div className="product-details__top">
                <h3 className="product-details__title">
                  Custom T-shirts <span>$46.00</span>
                </h3>
              </div>
              <div className="product-details__reveiw">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <span>2 customer reviews</span>
              </div>
              <div className="product-details__content">
                <p className="product-details__content-text1">
                  Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des mauris commodo venenatis
                  ligula commodo leez sed blandit convallis dignissim onec vel pellentesque neque. It has survived
                  not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged.
                </p>
                <p className="product-details__content-text2">
                  REF. 4231/406 <br />
                  Available in store
                </p>
              </div>


              <div className="product-details__quantity">
                <h3 className="product-details__quantity-title">Quantity</h3>
                <div className="quantity-box">
                  <button
                    type="button"
                    className="sub"
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                  >
                    <i className="fa fa-minus"></i>
                  </button>
                  <input
                    type="number"
                    id="1"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    min="1"
                  />
                  <button
                    type="button"
                    className="add"
                    onClick={handleIncrement}
                  >
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>

              <div className="product-details__buttons">
                <div className="product-details__buttons-1">
                  <Link className="thm-btn" to="/wishlist">
                    Add to Wishlist
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </Link>
                </div>

                <div className="product-details__buttons-2">
                  <Link className="thm-btn" to="/cart">
                    Add to Cart
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </Link>
                </div>
              </div>

              <div className="product-details__social">
                <div className="title">
                  <h3>Share with friends:</h3>
                </div>
                <div className="product-details__social-link">
                  <Link to="#"><span className="fab fa-twitter"></span></Link>
                  <Link to="#"><span className="fab fa-facebook"></span></Link>
                  <Link to="#"><span className="fab fa-pinterest-p"></span></Link>
                  <Link to="#"><span className="fab fa-instagram"></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="product-description">
        <div className="container">
          <h3 className="product-description__title">Description</h3>
          <p className="product-description__text1">
            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
            passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
            don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
            be sure there isn't anything embarrang hidden in the middle of text.
          </p>
          <div className="product-description__list">
            <ul className="list-unstyled">
              <li>
                <p><span className="icon-right-arrow21"></span> Nam at elit nec neque suscipit gravida.</p>
              </li>
              <li>
                <p><span className="icon-right-arrow21"></span> Aenean egestas orci eu maximus tincidunt.</p>
              </li>
              <li>
                <p><span className="icon-right-arrow21"></span> Curabitur vel turpis id tellus cursus laoreet.</p>
              </li>
            </ul>
          </div>
          <p className="product-description__tex2">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
            this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="review-one">
        <div className="container">
          <div className="comments-area">
            <div className="review-one__title">
              <h3>2 reviews</h3>
            </div>

            {/* Review 1 */}
            <div className="comment-box">
              <div className="comment">
                <div className="author-thumb">
                  <figure className="thumb">
                    <img src={ReviewImg1} alt="Kevin martin" />
                  </figure>
                </div>

                <div className="review-one__content">
                  <div className="review-one__content-top">
                    <div className="info">
                      <h2>Kevin martin <span>20 july 2025 . 4:00 pm</span></h2>
                    </div>
                    <div className="reply-btn">
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                    </div>
                  </div>

                  <div className="review-one__content-bottom">
                    <p>
                      It has survived not only five centuries, but also the leap into electronic typesetting
                      unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      Vestibulum sollicitudin varius mauris non dignissim.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="comment-box">
              <div className="comment">
                <div className="author-thumb">
                  <figure className="thumb">
                    <img src={ReviewImg2} alt="Sarah albert" />
                  </figure>
                </div>

                <div className="review-one__content">
                  <div className="review-one__content-top">
                    <div className="info">
                      <h2>Sarah albert <span>20 july 2025 . 4:00 pm</span></h2>
                    </div>
                    <div className="reply-btn">
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                      <i className="icon-star"></i>
                    </div>
                  </div>

                  <div className="review-one__content-bottom">
                    <p>
                      It has survived not only five centuries, but also the leap into electronic typesetting
                      unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.
                      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      Vestibulum sollicitudin varius mauris non dignissim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="review-form-one">
        <div className="container">
          <div className="review-form-one__inner">
            <h3 className="review-form-one__title">Add a review</h3>
            <div className="review-form-one__rate-box">
              <p className="review-form-one__rate-text">Rate this product?</p>
              <div className="review-form-one__rate">
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
                <i className="icon-star"></i>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                return (
                  e.preventDefault(),
                  alert("Submited")
                )
              }}
              className="review-form-one__form">
              <div className="row">
                <div className="col-xl-12">
                  <div className="review-form-one__input-box text-message-box">
                    <textarea name="message" placeholder="Write comment"></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="review-form-one__input-box">
                    <input type="text" placeholder="Your name" name="name" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="review-form-one__input-box">
                    <input type="email" placeholder="Email address" name="email" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-12">
                  <button type="submit" className="thm-btn review-form-one__btn">
                    Submit comment
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;