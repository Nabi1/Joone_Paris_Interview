import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { SearchBar } from './subComponents/SearchBar';
import { Select } from "../shared/Select";

const options = require('./searhcAreaOptions.json')

export const SearchArea = ({ filterBy, setFilterBy, setSearchValue }) => {
  const [errorFilterBy, setErrorFilterBy] = useState(false);

  return (
    <div className="d-flex w-100 mt-3">
      <Select
        className="mr-3"
        options={options}
        errorFilterBy={errorFilterBy}
        filterBy={filterBy}
        fullWidth
        minWith={250}
        setFilterBy={setFilterBy}
        setErrorFilterBy={setErrorFilterBy}
      />
      <SearchBar
        filterBy={filterBy}
        className="w-50"
        setSearchValue={setSearchValue}
        setErrorFilterBy={setErrorFilterBy}
      />
    </div>
  );
};

SearchArea.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
