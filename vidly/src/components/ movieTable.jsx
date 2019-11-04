import React, { Component } from "react";
import Like from "./like";

class MovieTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order == "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onLike, onDelete, onSort } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              onClick={() => {
                this.raiseSort("title ");
              }}
              scope="col"
            >
              Title
            </th>
            <th
              onClick={() => {
                this.raiseSort("genre.name");
              }}
              scope="col"
            >
              Genre
            </th>
            <th
              onClick={() => {
                this.raiseSort("numberInStock");
              }}
              scope="col"
            >
              Stock
            </th>
            <th
              onClick={() => {
                this.raiseSort("dailyRentalRate");
              }}
              scope="col"
            >
              Rate
            </th>
            <th
              onClick={() => {
                this.raiseSort();
              }}
              scope="col"
            >
              Favourite
            </th>
            <th
              onClick={() => {
                this.raiseSort();
              }}
              scope="col"
            ></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like movie={movie} likeHandler={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie._id)}
                  className="bt btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
