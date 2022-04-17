import React from "react";

import Header from "./header";
import Search from "./commen/search";
import SmallShoppingCard from "./commen/smallShoppingCard";
import Products from "./Products";

const ProductPage = ({
  searchQuery,
  onSearch,
  shoppingCardItems,
  pageSize,
  products,
  genres,
  onAddToCard,
  onLike,
  onPageChange,
  currentPage,
  totaleCount,
  onGenreSelect,
  selectedGenre,
  showCard,
  onShoppingCardDelete,
  mainProduct,
  onHideSmallCard,
}) => {
  return (
    <div>
      <SmallShoppingCard
        shoppingCardItems={shoppingCardItems}
        showCard={showCard}
        onShoppingCardDelete={onShoppingCardDelete}
      />
      <Header mainProduct={mainProduct} onHideSmallCard={onHideSmallCard} />
      <Search searchQuery={searchQuery} onSearch={onSearch} />
      <Products
        products={products}
        genres={genres}
        pageSize={pageSize}
        selectedGenre={selectedGenre}
        totaleCount={totaleCount}
        currentPage={currentPage}
        onAddToCard={onAddToCard}
        onLike={onLike}
        onGenreSelect={onGenreSelect}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default ProductPage;
