import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WishlistImg1 from '../../assets/images/shop/wishlist-page-img-1.jpg';
import WishlistImg2 from '../../assets/images/shop/wishlist-page-img-2.jpg';
import WishlistImg3 from '../../assets/images/shop/wishlist-page-img-3.jpg';
import WishlistImg4 from '../../assets/images/shop/wishlist-page-img-4.jpg';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: WishlistImg1,
      name: 'Classy chair',
      price: 50.00
    },
    {
      id: 2,
      image: WishlistImg2,
      name: 'Comfy chair',
      price: 90.00
    },
    {
      id: 3,
      image: WishlistImg3,
      name: 'Boss chair',
      price: 60.00
    },
    {
      id: 4,
      image: WishlistImg4,
      name: 'Sofa chair',
      price: 170.00
    }
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <section className="wishlist-page">
      <div className="container">
        <div className="table-responsive-box">
          <table className="wishlist-table">
            <tbody>
              {wishlistItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="product-box">
                      <div className="img-box">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-name-select-box">
                      <div className="product-name">
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                      <div className="product-select">
                        <Link 
                          className="thm-btn wishlist-page__btn" 
                          to="/wishlist"
                        >
                          Select Product
                          <i className="icon-right-arrow21"></i>
                          <span className="hover-btn hover-bx"></span>
                          <span className="hover-btn hover-bx2"></span>
                          <span className="hover-btn hover-bx3"></span>
                          <span className="hover-btn hover-bx4"></span>
                        </Link>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div 
                      className="cross-icon" 
                      onClick={() => removeItem(item.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="fas fa-times remove-icon"></i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WishlistPage;