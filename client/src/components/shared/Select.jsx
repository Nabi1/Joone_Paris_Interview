import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export const Select = ({
  filterBy,
  setFilterBy,
  errorFilterBy,
  setErrorFilterBy,
  options,
  ...props
}) => {

  useEffect(() => {
    if (filterBy.length > 0) {
      setErrorFilterBy(false);
    }
  }, [filterBy]);

  return (
    <FormControl style={{ minWidth: props.minWith }}>
      <TextField
        error={errorFilterBy}
        id="select-by"
        label="Filter par"
        onChange={(e) => setFilterBy(e.target.value)}
        select
        value={filterBy}
        variant="outlined"
        className={props.className}
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
  options: PropTypes.arrayOf(PropTypes.shape({
    label:PropTypes.string,
    value:PropTypes.string,
  })).isRequired,
};
