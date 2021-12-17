import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import TopHeader from "../Shared/TopHeader/TopHeader";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <Container className="py-5">
        <h2
          style={{
            fontSize: "2.8vw",
            fontWeight: "700",
            fontFamily: "Lora",
            textAlign: "center",
            color: "var(--text-color)",
          }}
        >
          Your Account
        </h2>
        <Row className="d-flex align-items-center">
          <Col sm={6} md={4} lg={4}>
            <img
              className="rounded shadow"
              style={{ width: "100%" }}
              src="https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325466/man-walking-dog.jpg"
              alt=""
            />
          </Col>
          <Col sm={6} md={6} lg={6}>
            <h3>Name : Sumaiya Alomgir</h3>
            <p>Email : hanansumaiya@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
