import React from "react";

import { Link } from "react-router-dom";

import AddToCard from "./addTocard";
import Like from "./like";

const ProductItems = ({ products, onAddToCard, onLike }) => {
  return (
    <div className="pb-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {products.map((item) => {
          return (
            <div key={item.id} className="col-6 position-relative">
              <div className="card item-card">
                <div className="card-img primary-bg">
                  <img className="p-4" src={item.src} alt={item.name} />
                </div>
                <div className="py-4 px-3">
                  <Link
                    to={`/products/${item.id}`}
                    className="card-name text-decoration-none fs-6"
                  >
                    {item.name}
                  </Link>
                  <h5 className="card-price fw-normal">${item.price}</h5>
                  <div className="d-flex card-btns">
                    <AddToCard
                      item={item}
                      onAddToCard={() => onAddToCard(item)}
                    />
                    <Like liked={item.liked} onLike={() => onLike(item)} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductItems;
