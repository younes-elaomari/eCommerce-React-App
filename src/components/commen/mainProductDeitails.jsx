import React from "react";

const MainProductDeitails = ({ mainProductDeitails }) => {
  return (
    <div className="main-prodoct-props row row-cols-1 row-cols-sm-2 row-cols-md-2">
      {mainProductDeitails.map((d) => {
        return (
          <div key={d.id} className="main-prodoct-props-card col-6 text-white">
            <h6 className="pt-3 pb-5">{d.title}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default MainProductDeitails;
