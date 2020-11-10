import React, { useState } from 'react';

import { Header } from './Header';
import { ProductsContainer } from './Products/Products.container';
import { SearchArea } from './SearchArea/SearchArea';

export const Home = () => {
  const [filterBy, setFilterBy] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="m-auto justify-content-center align-items-stretch w-75 ">
      <Header />
      <div className="d-flex w-100 mt-3">
        <SearchArea
          selectedProductsCount={selectedProducts.length}
          setSearchValue={setSearchValue}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      </div>
      <ProductsContainer
        setSelectedProducts={setSelectedProducts}
        searchValue={searchValue}
        filterBy={filterBy}
        selectedProducts={selectedProducts}
      />
    </div>
  );
};
