import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { Styles } from './Products.styles';
import List from '../shared/List/List';

const listConfig = require('../SearchArea/searchAreaOptions.json');

export const Products = ({
  products,
  searchValue,
  filterBy,
  setSelectedProducts,
  selectedProducts,
}) => {
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  const filterProducts = () => {
    let filteredProducts = [];

    if (!searchValue || filterBy.length === 0) {
      return setProductsToDisplay(products);
    }
    // TODO : Use Regex to properly filter by insensitive case
    filteredProducts = products.filter((product) => {
      if (typeof product.node[filterBy] === 'number') {
        return product.node[filterBy] === parseInt(searchValue, 10);
      }
      return product.node[filterBy].includes(searchValue);
    });
    return setProductsToDisplay(filteredProducts);
  };

  useEffect(() => {
    filterProducts();
  }, [searchValue, filterBy, products]);

  const rows = productsToDisplay.map((product) => {
    const { description, id, title, totalInventory, vendor } = product.node;

    return {
      description: `${description.substring(0, 250)}...`,
      id: id.split('Product/')[1],
      title,
      totalInventory,
      vendor,
    };
  });

  const isItemAlreadySelected = (item) =>
    selectedProducts.filter((product) => product.id === item.id).length > 0;

  /**
   *
   * @param item {Object}
   * @param item.id {String}
   * @param item.description {String}
   * @param item.title {String}
   * @param item.totalInventory {Number}
   * @param item.vendor {String}
   */
  const handleSelectedProducts = (item) => {
    if (selectedProducts.length > 0 && isItemAlreadySelected(item)) {
      return setSelectedProducts(
        selectedProducts.filter((product) => product.id !== item.id),
      );
    }
    return setSelectedProducts([...selectedProducts, item]);
  };

  /**
   *
   * @param item {Object}
   * @param item.id {String}
   * @param item.description {String}
   * @param item.title {String}
   * @param item.totalInventory {Number}
   * @param item.vendor {String}
   */
  const addItem = (item) => {
    return (
      <Button
        title="Visualiser le besoin"
        color="secondary"
        className="text-dark"
        onClick={() => handleSelectedProducts(item)}
      >
        {isItemAlreadySelected(item) ? <DeleteIcon /> : <AddIcon />}
      </Button>
    );
  };
  return (
    <Paper className="d-flex w-100 p-3 mt-5 mb-3" elevation={5}>
      <Styles.List className="mt-5">
        <List
          clickableRows
          listSize={10}
          totalElt={10}
          data={rows}
          listConfig={listConfig}
          page={1}
          actions={[addItem]}
        />
      </Styles.List>
    </Paper>
  );
};

Products.propTypes = {
  filterBy: PropTypes.string.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSelectedProducts: PropTypes.func.isRequired,
  selectedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      totalInventory: PropTypes.number,
      vendor: PropTypes.string,
    }),
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      id: PropTypes.string,
      title: PropTypes.string,
      totalInventory: PropTypes.number,
      vendor: PropTypes.string,
    }),
  ).isRequired,
};
