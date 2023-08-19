import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBeers } from '../Redux/action';

const BeerList = () => {
  const beers = useSelector((state) => state.beers);
  const dispatch = useDispatch();

  useEffect(() => {
    //beer List
    dispatch(fetchBeers());
  }, [dispatch]);

  return (
    <div className="table-responsive">
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
    </div>
  );
};

export default BeerList;
