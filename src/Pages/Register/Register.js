import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import TopHeader from "../Shared/TopHeader/TopHeader";
import Swal from "sweetalert2";

const Register = () => {
  const { registerUser, error, handleGoogleSignIn } = useAuth();
  const [loginData, setloginData] = useState({});

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

  const handleRegisterSubmit = (e) => {
    const namereg = document.getElementById("name_reg").value.length;
    const emailreg = document.getElementById("email_reg").value.length;
    const passwordreg = document.getElementById("pass_reg").value.length;
    const repasswordreg = document.getElementById("pass2_reg").value.length;

    if (
      namereg === 0 ||
      emailreg === 0 ||
      passwordreg === 0 ||
      repasswordreg === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Field must not be empty",
      });
    } else if (loginData.password !== loginData.password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password not matched!",
      });
    } else if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
    } else {
      registerUser(loginData.email, loginData.password, navigate, location);
    }

    e.preventDefault();
  };
  ///=============google sign in
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
            <h4 style={{ marginBottom: "15px" }}>Please Register</h4>
            <div className="w-100">
              <form onSubmit={handleRegisterSubmit} className="w-100">
                <input
                  onChange={handleOnChange}
                  className="form-control mb-3 border-0 shadow rounded"
                  placeholder="name"
                  type="text"
                  name="name"
                  id="name_reg"
                />

                <input
                  onChange={handleOnChange}
                  className="form-control mb-3 border-0 shadow rounded"
                  placeholder="email"
                  type="email"
                  name="email"
                  id="email_reg"
                />
                <input
                  onChange={handleOnChange}
                  className="form-control mb-3 border-0 shadow rounded"
                  placeholder="password"
                  type="password"
                  name="password"
                  id="pass_reg"
                />
                <input
                  onChange={handleOnChange}
                  className="form-control mb-4 border-0 shadow rounded"
                  placeholder="retype password"
                  type="password"
                  name="password2"
                  id="pass2_reg"
                />
                <input
                  className="blog-button w-100"
                  type="submit"
                  value="Register"
                />
              </form>
              <p className="text-center my-3">OR</p>

              <Link to="/login">
                <p className="text-center my-3 text-dark">
                  Already Register ? Please login
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

export default Register;
