import React from "react";

const MainProductProps = ({ mainProductProps }) => {
  return (
    <React.Fragment>
      {mainProductProps.map((prop) => {
        return (
          <h4 key={prop.id} className="display-3 fw-light text-white">
            {prop.title}
          </h4>
        );
      })}
    </React.Fragment>
  );
};

export default MainProductProps;
