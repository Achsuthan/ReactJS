import React from "react";

const Like = ({ onLikeHandler, movie }) => {
  const className = movie.liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <div>
      <i
        onClick={onLikeHandler}
        className={className}
        style={{ cursor: "pointer" }}
      ></i>
    </div>
  );
};

export default Like;
