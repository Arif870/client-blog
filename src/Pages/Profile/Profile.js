import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import TopHeader from "../Shared/TopHeader/TopHeader";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <TopHeader></TopHeader>
      <Container className="py-5">
        <h2
          style={{
            fontSize: "3vw",
            fontWeight: "700",
            fontFamily: "Lora",
            textAlign: "center",
            color: "var(--text-color)",
          }}
        >
          {user.displayName} Profile
        </h2>
        <Row className="d-flex align-items-center mt-4">
          <Col sm={6} md={4} lg={4}>
            {user.email ? (
              <img
                className="rounded shadow mb-4"
                style={{ width: "90%" }}
                src={user.photoURL}
                alt=""
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "var(--secondary-color)",
                  color: "var(--primary-color)",
                  border: "1px solid var(--primary-color)",
                }}
              ></div>
            )}
          </Col>
          <Col sm={6} md={6} lg={6}>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Lora",
                color: "var(--text-color)",
                marginBottom: "10px",
              }}
            >
              Name : {user.displayName}
            </p>
            <p
              style={{
                fontSize: "17px",
                fontWeight: "700",
                fontFamily: "Lora",
                color: "var(--text-color)",
              }}
            >
              Email : {user.email}
            </p>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Profile;
