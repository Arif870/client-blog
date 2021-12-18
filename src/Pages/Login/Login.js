import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import TopHeader from "../Shared/TopHeader/TopHeader";

const Login = () => {
  const [loginData, setloginData] = useState({});
  const { loginUser, handleGoogleSignIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setloginData(newLoginData);
    console.log("loginData", loginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, navigate, location);
    e.preventDefault();
    console.log("clicked");
  };

  //==============google
  const signInWithGoogle = (e) => {
    e.preventDefault();
    handleGoogleSignIn(navigate, location);
  };
  return (
    <div>
      <TopHeader></TopHeader>
      <Container style={{ marginTop: "35px" }}>
        <Row>
          <Col sm={8} md={8} lg={4} className="mx-auto">
            <h4 style={{ marginBottom: "15px" }}>Please Login</h4>
            <div className="w-100">
              <form onSubmit={handleLoginSubmit} className="w-100">
                <input
                  onChange={handleOnChange}
                  className="form-control mb-3 border-0 shadow rounded"
                  placeholder="email"
                  type="email"
                  name="email"
                />
                <input
                  onChange={handleOnChange}
                  className="form-control mb-4 border-0 shadow rounded"
                  placeholder="password"
                  type="password"
                  name="password"
                />
                <input
                  className="blog-button w-100"
                  type="submit"
                  value="Login"
                />
              </form>
              <p className="text-center my-3">OR</p>

              <Link to="/register">
                <p className="text-center my-3 text-dark">
                  New in this site ? Register
                </p>
              </Link>
              <Link to="/home">
                <button
                  onClick={signInWithGoogle}
                  className="blog-button w-100"
                >
                  Sign as Google
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
