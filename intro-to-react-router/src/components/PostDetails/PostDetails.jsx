import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const postDetails = useLoaderData();

  const navigate = useNavigate();
  //   navigate("/");
  return (
    <div>
      <h3>{postDetails.title}</h3>
      <p>{postDetails.body}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetails;
