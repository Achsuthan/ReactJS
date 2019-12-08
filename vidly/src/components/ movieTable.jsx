import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import dropdown from 'react-drop-down-searcher'

class MovieTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onLike, onDelete, tableHeader } = this.props;
    return (
      <div>
        <dropdown
          placeholder="Dropdown..."
          isSingle={true}
          list={[]}
          labelName="name"
          selectedList={[]}
          selectedlabelName="name"
          toggleItem={val => console.log(val)}
          handleInputChange={val => console.log(val)}
        />

<table className="table">
        <TableHeader tableHeader={tableHeader} onSort={this.raiseSort} />
        <TableBody movies={movies} onLike={onLike} onDelete={onDelete} />
        {/* <tbody>
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
        </tbody> */}
      </table>
      </div>
      
    );
  }
}

export default MovieTable;
