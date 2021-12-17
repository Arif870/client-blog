import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="d-flex align-items-center">
          <Col sm={4} md={4} lg={4}>
            <Navbar.Brand
              style={{
                color: "white",
                fontSize: "3vw",
                fontWeight: "700",
                fontFamily: "Lora",
              }}
              href="#home"
            >
              BlogBD
            </Navbar.Brand>
          </Col>
          <Col sm={4} md={4} lg={4}>
            <ul
              style={{
                color: "white",
                fontSize: "16px",
                fontWeight: "500",
                fontFamily: "Lora",
                padding: "0px",
              }}
            >
              <li>About Us</li>
              <li>Service</li>
              <li>Blogs</li>
            </ul>
          </Col>
          <Col sm={4} md={4} lg={4} className="footerIcons">
            <i class="footerIcon fab fa-facebook-square"></i>
            <i class="footerIcon fab fa-twitter-square"></i>
            <i class="footerIcon fab fa-linkedin"></i>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p style={{ textAlign: "center", color: "white", margin: "0px" }}>
              &copy; All right reserved || BLOGBD 2021
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
