import React, { Component } from "react";
import _ from "lodash";
import PropType from "prop-types";

const Pagination = props => {
  const { itemCount, pageSize, onPageChange, currentPage } = props;
  console.log("Item Count ", itemCount);
  console.log("Page size ", pageSize);
  const pagesCount = Math.ceil(itemCount / pageSize);
  if (pagesCount == 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {/* <li className="page-item">
          <a className="page-link" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </a>
        </li> */}
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
        {/* <li className="page-item">
          <a className="page-link" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropType.number.isRequired,
  pageSize: PropType.number.isRequired,
  onPageChange: PropType.func.isRequired,
  currentPage: PropType.number.isRequired
};

export default Pagination;
