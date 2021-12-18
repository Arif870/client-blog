import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopHeader from "../Shared/TopHeader/TopHeader";
import { useForm } from "react-hook-form";
import "./SinglePost.css";

const SinglePost = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <TopHeader></TopHeader>
      <Container className="py-3">
        <h3
          style={{
            fontSize: "2.8vw",
            fontWeight: "700",
            fontFamily: "Lora",
            textAlign: "center",
            color: "var(--text-color)",
          }}
        >
          Add Blog
        </h3>

        <Row className="pt-5">
          <Col lg={8} className="mx-auto">
            {" "}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                className="form-control py-2 mb-3"
                placeholder="Your name"
              />
              <input
                name="email"
                {...register("email", { required: true })}
                className="form-control py-2 mb-3"
                placeholder="Your email"
              />
              <input
                type="date"
                name="date"
                {...register("date", { required: true })}
                className="form-control py-2 mb-3"
              />
              <input
                type="text"
                name="title"
                {...register("title", { required: true })}
                className="form-control py-2 mb-3"
                placeholder="Blog Title"
              />
              <input
                name="image"
                {...register("image", { required: true })}
                className="form-control py-2 mb-3"
                placeholder="Blog Image (link only)"
              />
              <textarea
                name="description"
                {...register("description", { required: true })}
                className="form-control py-2 mb-4"
                placeholder="Blog Description"
                rows="5"
              ></textarea>
              <input
                className="blog-button w-25 mx-auto d-block"
                type="submit"
              />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SinglePost;
