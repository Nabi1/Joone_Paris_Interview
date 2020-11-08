import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const options = require('./SelectOptions.json');

export const Select = ({
  filterBy,
  setFilterBy,
  errorFilterBy,
  setErrorFilterBy,
}) => {
  useEffect(() => {
    if (filterBy.length > 0) {
      setErrorFilterBy(false);
    }
  }, [filterBy]);

  return (
    <FormControl style={{ minWidth: 250 }}>
      <TextField
        className="mr-3"
        error={errorFilterBy}
        id="select-by"
        label="Filter par"
        onChange={(e) => setFilterBy(e.target.value)}
        select
        value={filterBy}
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </FormControl>
  );
};
Select.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setFilterBy: PropTypes.func.isRequired,
  errorFilterBy: PropTypes.bool.isRequired,
  setErrorFilterBy: PropTypes.func.isRequired,
};
