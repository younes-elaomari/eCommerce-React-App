import React, { Component } from "react";
import Link from "react-router-dom/Link";

class ShoppingCard extends Component {
  render() {
    const { shoppingCardItems, onShoppingCardDelete } = this.props;

    if (shoppingCardItems.length === 0)
      return (
        <div className="container empty-card vh-100">
          <Link to="/products" className="text-decoration-none">
            <h5 className="display-6">Your shopping card is empty</h5>
          </Link>
        </div>
      );

    return (
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {shoppingCardItems.map((item) => {
            return (
              <div key={item.id} className="col-6 position-relative rounded">
                <div className="card shoping-card item-card shadow-sm px-3">
                  <img
                    className="img-fluid p-4"
                    src={item.src}
                    alt={item.name}
                  />
                  <div className="">
                    <p className="fw-bold fs-6 card-name">{item.name}</p>
                    <p className="card-item-description text-muted fs-6 card-name">
                      {item.description}
                    </p>
                    <div className="d-flex w-100 align-items-center card-btns my-4">
                      <p className="fw-bold fs-5 card-price">${item.price}</p>
                      <button
                        onClick={() => onShoppingCardDelete(item)}
                        className="btn m-2 text-white text-uppercase delete-btn"
                      >
                        <i class="fa fa-times" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShoppingCard;
