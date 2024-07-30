import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label htmlFor="filterInput" className="filter-input">
        Find contacts by name
        <input
          id="filterInput"
          type="text"
          value={filter}
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};

export default Filter;
