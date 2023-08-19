import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBeers } from '../Redux/action';
import Pagination from './pagination';

const BeerList = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const beers = useSelector((state) => state.beers);

  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch beer list
    dispatch(fetchBeers());

    // Trigger fade-in effect after a short delay
    setTimeout(() => {
      setFadeIn(true);
    }, 100);
  }, [dispatch]);

  return (
    <div className={`table-responsive beer-list${fadeIn ? 'fade-in' : ''}`}>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Tagline</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {beers &&
            beers.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.tagline}</td>
                <td>{item.description}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default BeerList;
