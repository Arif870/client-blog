import React from "react";
import TopHeader from "../Shared/TopHeader/TopHeader";

const SinglePost = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <h2
        style={{
          fontSize: "2.8vw",
          fontWeight: "700",
          fontFamily: "Lora",
          textAlign: "center",
          color: "var(--text-color)",
        }}
      >
        Single Post
      </h2>
    </div>
  );
};

export default SinglePost;
