import React from "react";
import Link from "react-router-dom/Link";

const Favorites = ({ favProducts }) => {
  if (favProducts.length === 0)
    return (
      <div className="container empty-card vh-100">
        <Link to="/products" className="text-decoration-none">
          <h5 className="display-6">You have no favorities</h5>
        </Link>
      </div>
    );

  return (
    <div className="container pb-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 min-vh-100">
        {favProducts.map((item) => {
          return (
            <div key={item.id} className="col-6 position-relative rounded">
              <div className="card shoping-card item-card shadow-sm">
                <img
                  className="img-fluid px-4 pt-4"
                  src={item.src}
                  alt={item.name}
                />
                <div className="px-3 py-4 text-white">
                  <p className="fw-bold fs-6">{item.name}</p>
                  <p className="fw-bold fs-6">${item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favorites;
