import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from '../Redux/action';

function Pagination() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.currentPage);
  console.log(currentPage);
  const [page, setPage] = useState(1);
  // const [brewedBefore, setBrewedBefore] = useState('');
  // const [brewedAfter, setBrewedAfter] = useState('');

  const handlePageChange = (newPage) => {
    setPage(newPage);
    dispatch(fetchBeers(newPage));
  };

  const totalPages = 33;
  const maxVisiblePages = 5;

  const getPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      buttons.push(
        <button
          key="first"
          className="btn btn-secondary ml-2"
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="dots1" className="mx-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`btn btn-secondary ml-2 ${i === page ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="dots2" className="mx-2">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key="last"
          className="btn btn-secondary ml-2"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="mt-3 pb-5">
      <button
        className="btn btn-secondary"
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      {getPageButtons()}
      <button
        className="btn btn-secondary ml-2"
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
