import React from "react";
import Like from "../like";

const TableBody = ({ movies, onLike, onDelete }) => {
  return (
    <tbody>
      {movies.map(movie => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <Like movie={movie} onLikeHandler={() => onLike(movie)} />
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
  );
};

export default TableBody;
