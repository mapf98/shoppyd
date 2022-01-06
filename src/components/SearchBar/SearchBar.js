import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { fetchCustomSearch, clearCustomSearch } from '../../store/reducers/products/actions';

function SearchBar() {
  const [search, setValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (search !== '') {
      dispatch(fetchCustomSearch(search));
    } else {
      dispatch(clearCustomSearch(search));
    }
  }, [search]);

  return (
    <div className="searchbar-wrapper">
      <input
        className="input"
        id="text-input"
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
