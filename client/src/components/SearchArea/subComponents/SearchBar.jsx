import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

export const SearchBar = ({
  setSearchValue,
  filterBy,
  setErrorFilterBy,
  ...props
}) => {
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
    if (filterBy.length > 0) {
      return setErrorFilterBy(false);
    }
    return setErrorFilterBy(true);
  };
  return (
    <TextField
      label="Recherche de votre futur produit Joone"
      variant="outlined"
      className={props.className}
      name="searchValue"
      onChange={(e) => handleSearchValue(e)}
    />
  );
};

SearchBar.propTypes = {
  filterBy: PropTypes.string.isRequired,
  setErrorFilterBy: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};
