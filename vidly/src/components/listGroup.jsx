import React, { Component } from "react";
import { getGenres } from "../services/fakeGenreService";

class ListGroup extends Component {
  state = {
    genres: getGenres()
  };
  render() {
    const allGenres = [{ _id: "1", name: "All Genres" }, ...this.state.genres];
    console.log(this.props.selectedGnres);
    return (
      <ul className="list-group">
        {allGenres.map(genre => (
          <li
            onClick={() => {
              this.props.onListClick(genre);
            }}
            key={genre._id}
            className={
              this.props.selectedGnres === genre._id
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
