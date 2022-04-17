import React from "react";

const AddToCard = ({ item, onAddToCard }) => {
  return (
    <button
      onClick={onAddToCard}
      disabled={item.bye}
      className={
        !item.bye
          ? "btn text-uppercase add-to-card-btn"
          : "btn text-uppercase add-to-card-btn-outline"
      }
    >
      {item.bye ? (
        <i className="fa fa-check" aria-hidden="true"></i>
      ) : (
        <i className="fa fa-plus" aria-hidden="true"></i>
      )}
    </button>
  );
};

export default AddToCard;
