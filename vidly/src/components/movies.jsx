import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./listGroup";
import { getGenres } from "../services/fakeGenreService";
import MovieTable from "./ movieTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "1",
    sortColumn: { path: "title", order: "asc" },
    tableHeader: [{
      title: 'Title',
      content: 'title'
    },
    {
      title: 'Genre',
      content: 'genre.name'
    },
    {
      title: 'Stock',
      content: 'numberInStock'
    },
    {
      title: 'Rate',
      content: 'dailyRentalRate'
    },
    {
      title: 'Favourite',
      content: ''
    },
    {
      title: '',
      content: ''
    }]
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
  };
  sortHandler = sortColumn => {
    this.setState({ sortColumn });
  };

  titleMessageFn() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      sortColumn
    } = this.state;
    console.log(allMovies);
    console.log(pageSize);
    console.log(currentPage);

    const filtered =
      selectedGenre === "1"
        ? allMovies
        : allMovies.filter(movie => {
          return movie.genre._id === selectedGenre;
        });

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    console.log("Filtered Array", sorted);
    const movies = paginate(
      sorted,
      this.state.currentPage,
      this.state.pageSize
    );
    if (movies.length === 0) return <p>There is no more movies</p>;
    return (
      <div style={{ marginTop: "40px" }}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <ListGroup
                genres={this.state.genres}
                selectedGnres={this.state.selectedGenre}
                onListClick={this.handleListClick}
              />
            </div>
            <div className="col">
              <p> Showing {movies.length} movies in the database</p>
              <MovieTable
                tableHeader={this.state.tableHeader}
                movies={movies}
                onSort={this.sortHandler}
                onLike={this.likeMovie}
                onDelete={this.deleteMovie}
                sortColumn={this.state.sortColumn}
              />

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
