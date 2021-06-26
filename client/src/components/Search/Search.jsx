import React from 'react';

const Search = (props) => {
  return (
    <form onSubmit={props.handleSubmit}className="search-bar-container">
      <input
        id="search-bar"
        type="text"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
        placeholder="Search locations"
      />
      <button id="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;