import React, { Component } from "react";

const Like = ({ likeHandler, movie }) => {
  const className = movie.liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <div>
      <i
        onClick={likeHandler}
        className={className}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default Like;
