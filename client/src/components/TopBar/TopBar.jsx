import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { SearchBar } from './subComponents/SearchBar';
import { Select } from './subComponents/Select/Select';

export const TopBar = ({ filterBy, setFilterBy, setSearchValue }) => {
  const [errorFilterBy, setErrorFilterBy] = useState(false);

  return (
    <div className="d-flex w-100 mt-3">
      <Select
        errorFilterBy={errorFilterBy}
        className=""
        filterBy={filterBy}
        fullWidth
        setFilterBy={setFilterBy}
        variant="outlined"
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

TopBar.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
