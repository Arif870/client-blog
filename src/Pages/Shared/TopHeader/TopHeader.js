import React from "react";
import { Col, Nav, Navbar, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div style={{ backgroundColor: "var(--secondary-color)" }}>
      <Container>
        <Row>
          <Col lg={12}>
            <Navbar expand="lg">
              <Navbar.Brand
                style={{
                  color: "#FC7200",
                  fontSize: "3.5vw",
                  fontWeight: "700",
                  fontFamily: "Lora",
                }}
                href="#home"
              >
                BlogBD
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link as={Link} className="text-dark" to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} className="text-dark" to="/about">
                    About
                  </Nav.Link>
                  <Nav.Link as={Link} className="text-dark" to="/blog">
                    Blog
                  </Nav.Link>
                </Nav>
                <div className="d-flex align-items-center">
                  <Nav.Link as={Link} className="text-dark" to="/profile">
                    <img
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                      src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
                      alt="profile"
                    />
                  </Nav.Link>

                  <button className="login">Login</button>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
// #F8F9FA
export default TopHeader;
