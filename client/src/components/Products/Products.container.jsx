import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import { Products } from './Products';

export const ProductsContainer = ({ searchValue, filterBy }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const result = getProducts();
    result
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.err(err));
  }, []);

  const getProducts = async () => {
    const response = await fetch('/products');
    const body = await response.json();

    if (response.status >= 200 && response.status < 300) {
      return body;
    }
    throw Error(body.message);
  };

  return (
    <Products
      products={products}
      filterBy={filterBy}
      searchValue={searchValue}
    />
  );
};

ProductsContainer.propTypes = {
  filterBy: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
};
