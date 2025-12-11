import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would typically handle authentication
    }, 1500);
  };

  return (
    <section className="login-one">
      <div className="container">
        <div className="login-one__form">
          <div className="inner-title text-center">
            <h2>Login Here</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
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
                    {isLoading ? "Please wait..." : "Login Here"}
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </button>
                </div>
              </div>

              <div className="remember-forget">
                <div className="checked-box1">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="saveinfo"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="saveinfo">
                    <span></span>
                    Remember me
                  </label>
                </div>
                <div className="forget">
                  <Link to="#">Forgot password?</Link>
                </div>
              </div>

              <div className="create-account text-center">
                <p>
                  Not registered yet?{" "}
                  <Link to="/sign-up">Create an Account</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
