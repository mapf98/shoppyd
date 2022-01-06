import * as React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="searchbar-wrapper">
      <input className="input" id="text-input" type="text" placeholder="Buscar producto..." />
    </div>
  );
}

export default SearchBar;
