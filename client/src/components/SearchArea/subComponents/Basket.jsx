import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const Basket = ({ selectedProductsCount }) => {
  return (
    <div className="w-25 d-flex mr-5 align-items-center justify-content-end">
      <Badge
        title="Au clic un virement bancaire en votre faveur sera peut être émis"
        badgeContent={selectedProductsCount}
        color="primary"
      >
        <ShoppingCartIcon />
      </Badge>
    </div>
  );
};

Basket.propTypes = {
  selectedProductsCount: PropTypes.number.isRequired,
};
