import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { Styles } from './Products.styles';

export const Products = ({ products, searchValue, filterBy }) => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  const headerList = [
    { field: 'title', headerName: 'Nom', width: 200 },
    { field: 'vendor', headerName: 'Vendeur', width: 140 },
    { field: 'id', headerName: 'ID', width: 120 },
    { field: 'description', headerName: 'Description', width: 600 },
    { field: 'totalInventory', headerName: 'Stock' },
  ];
  const filterProducts = () => {
    let filteredProducts = [];

    if (searchValue === 0 || filterBy.length === 0) {
      return setProductsToDisplay(products);
    }
    filteredProducts = products.filter((product) =>
      product.node[filterBy].toLowerCase().includes(searchValue.toLowerCase()),
    );
    return setProductsToDisplay(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [searchValue, filterBy, products]);

  const rows = productsToDisplay.map((product) => {
    const {
      description,
      id,
      tags,
      title,
      totalInventory,
      vendor,
    } = product.node;

    return {
      description,
      id: id.split('Product/')[1],
      title,
      tags,
      totalInventory,
      vendor,
    };
  });

  return (
    <Styles.List className="mt-5">
      <DataGrid
        rows={rows}
        columns={headerList}
        pageSize={10}
        autoHeight
        checkboxSelection
      />
    </Styles.List>
  );
};

Products.propTypes = {
  filterBy: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      vendor: PropTypes.string,
    }),
  ).isRequired,
};
