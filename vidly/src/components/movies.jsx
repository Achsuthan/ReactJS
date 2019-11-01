import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
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

  handlePageChange = page => {
    console.log(page);
    this.setState({
      currentPage: page
    });
  };

  titleMessageFn() {
    const { pageSize, currentPage, movies: allMovies } = this.state;
    console.log(allMovies);
    console.log(pageSize);
    console.log(currentPage);
    const movies = paginate(
      allMovies,
      this.state.currentPage,
      this.state.pageSize
    );
    if (allMovies.length === 0) return <p>There is no more movies</p>;
    return (
      <div>
        <p> Showing {allMovies.length} movies in the database</p>
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
            {movies.map(movie => (
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
        <Pagination
          itemCount={allMovies.length}
          currentPage={this.state.currentPage}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
