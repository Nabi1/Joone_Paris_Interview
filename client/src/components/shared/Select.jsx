import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

export const Select = ({
  errorFilterBy,
  setError,
  options,
  value,
  onChange,
  ...props
}) => {
  useEffect(() => {
    if (value.length > 0) {
      setError(false);
    }
  }, [value]);

  return (
    <FormControl style={{ minWidth: props.minWith }}>
      <TextField
        error={errorFilterBy}
        id="select-by"
        label="Filter par"
        onChange={(e) => onChange(e.target.value)}
        select
        value={value}
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
  errorFilterBy: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};
