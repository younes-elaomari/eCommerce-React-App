import React from "react";
import Link from "react-router-dom/Link";
import _ from "lodash";

const Pagination = ({ currentPage, pageSize, count, onPageChange }) => {
  const pagesCount = Math.ceil(count / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="">
      <ul className="pagination pb-4">
        {pages.map((page) => {
          return (
            <li key={page} className="page-item">
              <Link
                to="/products"
                onClick={() => onPageChange(page)}
                className={
                  page === currentPage ? "page-link p-active" : "page-link"
                }
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
