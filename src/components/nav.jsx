import React, { Component } from "react";
import Link from "react-router-dom/Link";

class MainNav extends Component {
  cardItemsPrice = () => {
    const { shoppingCardItems } = this.props;
    let cardItemsPrice = "00.00";
    for (let key in shoppingCardItems) {
      cardItemsPrice =
        parseInt(cardItemsPrice) + parseInt(shoppingCardItems[key].price);
    }
    return cardItemsPrice;
  };

  render() {
    const { shoppingCardItems, onShowSmallCard } = this.props;
    return (
      <nav className="main-nav navbar navbar-expand-lg">
        <div className="container py-2">
          <Link to="/products" className="navbar-brand fw-bold text-white logo">
            MacBook Pro
          </Link>
          <div className="d-flex">
            <Link
              to="/users"
              className="navbar-brand fw-normal text-white logo"
            >
              users
            </Link>
            <Link to="/favorite" className="navbar-brand text-white logo">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </Link>
            <Link
              to="/shopping-card"
              onMouseOver={() => onShowSmallCard()}
              className="btn primary-btn rounded-pil d-flex"
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              <h6 className="mx-3">
                {this.cardItemsPrice()} $ / {shoppingCardItems.length} Item
              </h6>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default MainNav;
