import React, { Component } from "react";

class Link extends Component {
  state = {};
  render() {
    const className = this.props.movie.liked ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <div>
        <i
          onClick={this.props.likeHandler}
          className={className}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }
}

export default Link;
