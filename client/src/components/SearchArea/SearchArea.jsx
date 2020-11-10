import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import { SearchBar } from './subComponents/SearchBar';
import { Select } from '../shared/Select';
import { Basket } from './subComponents/Basket';

const options = require('./searchAreaOptions.json');

export const SearchArea = ({
  filterBy,
  setFilterBy,
  setSearchValue,
  selectedProductsCount,
}) => {
  const [errorFilterBy, setErrorFilterBy] = useState(false);

  return (
    <Paper className="d-flex w-100 p-3 mt-3" elevation={5}>
      <div className="w-75">
        <Select
          className="mr-3"
          options={options}
          errorFilterBy={errorFilterBy}
          value={filterBy}
          fullWidth
          minWith={250}
          setError={setErrorFilterBy}
          onChange={setFilterBy}
        />
        <SearchBar
          filterBy={filterBy}
          className="w-50"
          setSearchValue={setSearchValue}
          setErrorFilterBy={setErrorFilterBy}
        />
      </div>
      <Basket selectedProductsCount={selectedProductsCount} />
    </Paper>
  );
};

SearchArea.propTypes = {
  filterBy: PropTypes.string.isRequired,
  selectedProductsCount: PropTypes.number.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
