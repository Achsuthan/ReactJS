import React from "react";

const TableHeader = ({ onSort }) => {
  return (
    <thead>
      <tr>
        <th
          onClick={() => {
            onSort("title ");
          }}
          scope="col"
        >
          Title
          <i className="fa fa-fw fa-sort"></i>
        </th>
        <th
          onClick={() => {
            onSort("genre.name");
          }}
          scope="col"
        >
          Genre
          <i className="fa fa-fw fa-sort"></i>
        </th>
        <th
          onClick={() => {
            onSort("numberInStock");
          }}
          scope="col"
        >
          Stock
          <i className="fa fa-fw fa-sort"></i>
        </th>
        <th
          onClick={() => {
            onSort("dailyRentalRate");
          }}
          scope="col"
        >
          Rate
          <i className="fa fa-fw fa-sort"></i>
        </th>
        <th
          onClick={() => {
            onSort();
          }}
          scope="col"
        >
          Favourite
        </th>
        <th
          onClick={() => {
            onSort();
          }}
          scope="col"
        ></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
