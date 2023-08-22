import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBeers } from '../Redux/action';
import Pagination from './pagination';
import moment from 'moment';

const BeerList = () => {
  const beers = useSelector((state) => state.beers);

  const dispatch = useDispatch();
  const [brewedBefore, setBrewedBefore] = useState('');
  const [brewedAfter, setBrewedAfter] = useState('');
  const [formatedBefore, setFormatedBefore] = useState('');
  const [formatedAfter, setFormatedAfter] = useState('');
  console.log(brewedBefore);
  console.log(brewedAfter);

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);

  const handleFilterChange = () => {
    const before = moment(brewedBefore).format('MM/YYYY');
    const after = moment(brewedAfter).format('MM/YYYY');
    setFormatedBefore(before);
    setFormatedAfter(after);
    if (brewedBefore && brewedAfter && brewedBefore > brewedAfter) {
      dispatch(fetchBeers(1, before, after));
    }
  };

  const handleClearFilters = () => {
    setBrewedBefore('');
    setBrewedAfter('');
    setFormatedBefore('');
    setFormatedAfter('');
    dispatch(fetchBeers(1, null, null));
  };
  console.log(beers?.length);
  return (
    <div className={`table-responsive beer-list}`}>
      <div className="filters">
        <label htmlFor="brewedBefore">Brewed Before:</label>
        <input
          type="month"
          id="brewedBefore"
          value={brewedBefore}
          onChange={(e) => setBrewedBefore(e.target.value)}
        />
        <label htmlFor="brewedAfter">Brewed After:</label>
        <input
          type="month"
          id="brewedAfter"
          value={brewedAfter}
          onChange={(e) => setBrewedAfter(e.target.value)}
        />
        <button
          disabled={brewedAfter && brewedBefore ? false : true}
          onClick={handleFilterChange}
        >
          Apply Filters
        </button>
        <button
          disabled={brewedAfter && brewedBefore ? false : true}
          onClick={handleClearFilters}
        >
          Clear Filters
        </button>
      </div>
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

      {beers?.length === 0 ? (
        <p>No datas Found</p>
      ) : (
        <Pagination brewedBefore={formatedBefore} brewedAfter={formatedAfter} />
      )}
    </div>
  );
};

export default BeerList;
