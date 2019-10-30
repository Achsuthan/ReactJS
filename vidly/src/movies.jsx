import React, { Component } from "react";
import { getMovies, deleteMovie } from "./services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return (
      <div>
        {this.titleMessageFn()}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.deleteMovie(movie._id)}
                    className="bt btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  deleteMovie = id => {
    console.log("movie id", id);
    const movie = deleteMovie(id);
    console.log(movie);
    this.setState({
      //   movies: movie
    });
  };

  titleMessageFn() {
    if (this.state.movies.length === 0) return <p>There is no more movies</p>;
    return <p> Showing {this.state.movies.length} movies in the database</p>;
  }
}

export default Movies;
