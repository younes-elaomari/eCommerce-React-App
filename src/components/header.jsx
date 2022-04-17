import React from "react";

import MainProductDeitails from "./commen/mainProductDeitails";
import MainProductProps from "./commen/mainProductProps";

const Header = ({ mainProduct, onHideSmallCard }) => {
  return (
    <div onMouseOver={() => onHideSmallCard()} className="main-header">
      <div className="container">
        {mainProduct.map((prop) => {
          return (
            <div key={prop.id}>
              <div className="col">
                <article className="h-article text-center">
                  <p className="fs-4 fw-normal">{prop.name}</p>
                  <MainProductProps mainProductProps={prop.props} />
                  <p className="fs-5 fw-normal">Starting at ${prop.price}</p>
                </article>
              </div>
              <div className="main-prod-img m-auto">
                <img
                  className="card-img"
                  src="imgs/main-prod.png"
                  alt={prop.name}
                />
              </div>
              <MainProductDeitails mainProductDeitails={prop.deitails} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
