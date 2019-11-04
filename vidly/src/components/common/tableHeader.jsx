import React from "react";

const TableHeader = ({ onSort, tableHeader }) => {
  return (
    <thead>
      <tr>
        {tableHeader.map((head) => (
          <th
            onClick={() => {
              onSort(head.content);
            }}
            scope="col"
          >
            {head.title}
          {head.content !== '' ? <i className="fa fa-fw fa-sort"></i>: ''}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
