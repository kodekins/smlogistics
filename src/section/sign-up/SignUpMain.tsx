import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/icon/icon-google-2.png";
import FacebookIcon from "../../assets/images/icon/icon-facebook.png";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically handle user registration
    }, 1500);
  };

  return (
    <section className="sign-up-one">
      <div className="container">
        <div className="sign-up-one__form">
          <div className="inner-title text-center">
            <h2>Sign Up</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-xl-12">
                <div className="form-group">
                  <div className="input-box">
                    <input
                      type="text"
                      name="name"
                      id="formName"
                      placeholder="Name..."
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="form-group">
                  <div className="input-box">
                    <input
                      type="email"
                      name="email"
                      id="formEmail"
                      placeholder="Email..."
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="form-group">
                  <div className="input-box">
                    <input
                      type="text" // Changed to tel for phone numbers
                      name="phone"
                      id="formPhone"
                      placeholder="Phone..."
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="form-group">
                  <div className="input-box">
                    <input
                      type="text" // Changed from text to password for security
                      name="password"
                      id="formPassword"
                      placeholder="Password..."
                      required
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-12">
                <div className="form-group">
                  <button
                    className="thm-btn"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Please wait..." : "Sign Up"}
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="google-facebook">
              <Link to="https://www.google.com/" className="social-btn">
                <div className="icon">
                  <img src={GoogleIcon} alt="Google" />
                </div>
                Continue with Google
              </Link>
              <Link to="https://www.facebook.com/" className="social-btn">
                <div className="icon">
                  <img src={FacebookIcon} alt="Facebook" />
                </div>
                Continue with Facebook
              </Link>
            </div>

            <div className="create-account text-center">
              <p>
                Already have an account? <Link to="/login">Login Here</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
