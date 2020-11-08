import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

export const SearchBar = ({
  setSearchValue,
  filterBy,
  setErrorFilterBy,
  ...props
}) => {
  const handleSearchValue = (event) => {
    if (filterBy.length > 0) {
      setErrorFilterBy(false);
      console.log('event.target.value :', event.target.value);
      return setSearchValue(event.target.value);
    }
    return setErrorFilterBy(true);
  };
  return (
    <TextField
      placeholder="Recherche"
      variant="outlined"
      className={props.className}
      name="searchValue"
      onKeyUp={(e) => {
        if (e.key === 'Enter') {
          handleSearchValue(e);
        }
      }}
      onBlur={(e) => {
        handleSearchValue(e);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton
              onClick={(e) => {
                handleSearchValue(e);
              }}
              edge="end"
            >
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

SearchBar.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setErrorFilterBy: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

