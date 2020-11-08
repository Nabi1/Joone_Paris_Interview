import React, { useState } from 'react';

import { Header } from './Header';
import { ProductsContainer } from './Products/Products.container';
import { TopBar } from './TopBar/TopBar';

export const Home = () => {
  const [filterBy, setFilterBy] = useState('');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="m-auto justify-content-center align-items-stretch w-75 ">
      <Header />
      <div className="d-flex w-100 mt-3">
        <TopBar
          setSearchValue={setSearchValue}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
        />
      </div>
      <ProductsContainer searchValue={searchValue} filterBy={filterBy} />
    </div>
  );
};