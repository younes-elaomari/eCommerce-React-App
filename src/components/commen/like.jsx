import React from "react";

const Like = ({ liked, onLike }) => {
  return (
    <button onClick={onLike} className="btn like-btn text-uppercase">
      <i
        className={liked ? "fa fa-heart" : "fa fa-heart-o"}
        aria-hidden="true"
      ></i>
    </button>
  );
};

export default Like;
