import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./listGroup";
import { getGenres } from "../services/fakeGenreService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "1"
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

  handleListClick = selectedGenre => {
    console.log("Clicked", selectedGenre);
    this.setState({
      selectedGenre: selectedGenre._id
    });

    // if (selectedGenre._id != "1") {
    //   this.setState({
    //     movies: getMovies().filter(movie => {
    //       return movie.genre._id == selectedGenre._id;
    //     })
    //   });
    // } else {
    //   this.setState({
    //     movies: getMovies()
    //   });
    // }
  };

  titleMessageFn() {
    const { pageSize, currentPage, movies: allMovies, selectedGenre } = this.state;
    console.log(allMovies);
    console.log(pageSize);
    console.log(currentPage);

    const filtered = selectedGenre == "1" ? allMovies : allMovies.filter((movie) => {return movie.genre._id == selectedGenre})

    console.log("Filtered Array", filtered)
    const movies = paginate(
      filtered,
      this.state.currentPage,
      this.state.pageSize
    );
    if (movies.length === 0) return <p>There is no more movies</p>;
    return (
      <div style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ListGroup genres= {this.state.genres}
                selectedGnres={this.state.selectedGenre}
                onListClick={this.handleListClick}
              />
            </div>
            <div className="col">
              <p> Showing {movies.length} movies in the database</p>
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
                itemCount={filtered.length}
                currentPage={this.state.currentPage}
                pageSize={this.state.pageSize}
                onPageChange={this.handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
