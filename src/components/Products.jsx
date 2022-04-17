import React, { Component } from "react";
import Category from "./commen/category";
import ProductItems from "./commen/productItems";
import Pagination from "./commen/pagination";

class Products extends Component {
  render() {
    const {
      products,
      genres,
      onAddToCard,
      onLike,
      onGenreSelect,
      selectedGenre,
      totaleCount,
      currentPage,
      pageSize,
      onPageChange,
    } = this.props;
    return (
      <div className="container pt-4">
        <Category
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreSelect={onGenreSelect}
        />
        <ProductItems
          products={products}
          onAddToCard={onAddToCard}
          onLike={onLike}
        />
        <Pagination
          count={totaleCount}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
      </div>
    );
  }
}

export default Products;
