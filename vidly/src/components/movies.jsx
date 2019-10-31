import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };
  render() {
    return <div>{this.titleMessageFn()}</div>;
  }

  deleteMovie = id => {
    console.log("movie id", id);
    const movies = this.state.movies.filter(movie => {
      return movie._id !== id;
    });

    console.log(movies);

    this.setState({ movies });
  };
  likeMovie = movie => {
    const movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    console.log(movies);
    this.setState({ movies });
  };

  titleMessageFn() {
    if (this.state.movies.length === 0) return <p>There is no more movies</p>;
    return (
      <div>
        <p> Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Favourite</th>
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
                  <Like
                    movie={movie}
                    likeHandler={() => this.likeMovie(movie)}
                  />
                </td>
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
}

export default Movies;
