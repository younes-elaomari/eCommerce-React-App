import React from "react";

import { Link } from "react-router-dom";

const SmallShoppingCard = ({
  shoppingCardItems,
  showCard,
  onShoppingCardDelete,
}) => {
  return (
    <div className="position-relative">
      <div
        className={
          showCard ? "small-shopping-card show" : "small-shopping-card"
        }
      >
        {shoppingCardItems.length === 0 ? (
          <div className="p-4">
            <h6>Your shopping card is empty</h6>
          </div>
        ) : (
          <div>
            <div className="p-3">
              <table className="table shopping-card-table text-white">
                {shoppingCardItems.map((item) => {
                  return (
                    <tbody key={item.id}>
                      <tr>
                        <th scope="row">
                          <i className="fa fa-check" aria-hidden="true"></i>
                        </th>
                        <td>
                          <h6>{item.name}</h6>
                          <p>{item.genre}</p>
                        </td>
                        <td>
                          <h5>{item.price}$</h5>
                        </td>
                        <td>
                          <button
                            onClick={() => onShoppingCardDelete(item)}
                            className="btn small-card-delete-btn"
                          >
                            <i className="fa fa-times" aria-hidden="true"></i>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
            <Link
              to="/shopping-card"
              className="continue btn d-flex continue-btn justify-content-center align-items-center"
            >
              <h6>Continue</h6>
              <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SmallShoppingCard;
