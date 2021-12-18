import React from "react";
import { Col, Row } from "react-bootstrap";
import HeaderBanner from "../../Component/HeaderBanner/HeaderBanner";
import Posts from "../../Component/Posts/Posts";
import SideBar from "../../Component/SideBar/SideBar";
import Footer from "../Shared/Footer/Footer";
import TopHeader from "../Shared/TopHeader/TopHeader";
import "./Home.css";

const Home = () => {
  return (
    <>
      <TopHeader></TopHeader>
      <HeaderBanner></HeaderBanner>
      <Row
        style={{
          backgroundColor: "var(--secondary-color)",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
        className="ms-0 me-0 d-flex justify-content-center g-5"
      >
        <Col md={8} lg={8}>
          <Posts />
        </Col>
        <Col md={6} lg={4}>
          <SideBar></SideBar>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  );
};

export default Home;
