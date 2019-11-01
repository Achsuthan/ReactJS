import React, { Component } from "react";


class ListGroup extends Component {
  render() {
    console.log("Default Props ", this.props.testingValue)
    const allGenres = [{ _id: "1", name: "All Genres" }, ...this.props.genres];
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

//set default value for props and we don't need to pass it from parent 
ListGroup.defaultProps = {
  testingValue : "Test"
}

export default ListGroup;
