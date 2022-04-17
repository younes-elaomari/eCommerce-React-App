import React, { Component } from "react";

import AddToCard from "./addTocard";
import { getProduct } from "../../services/productService";

class ProductDeitails extends Component {
  state = {
    product: {},
  };

  componentDidMount = () => {
    const productID = this.props.match.params.id;
    const product = getProduct(productID);
    if (!product) return this.props.history.replace("/not-found");
    this.setState({ product });
  };

  render() {
    const { product } = this.state;
    const { onAddToCard } = this.props;

    return (
      <div className="container ">
        <div className="row min-vh-100 align-items-center">
          <div className="col-lg-6 ml-auto  justify-content-center">
            <div className="image-content" data-aos="fade-right">
              <img
                className="img-fluid"
                src={`../${product.src}`}
                alt={product.name}
              />
            </div>
          </div>
          <div className="col-lg-6 mr-auto align-self-center mb-5">
            <div className="feature-content">
              <div className="deitails-card p-4">
                <h2 className="display-5 text-white">{product.name}</h2>
                <h2 className="display-6 color-primary">{product.price}$</h2>
              </div>
              <p className="lead fw-normal text-muted m-auto py-3">
                {product.description}
              </p>
              <AddToCard
                item={product}
                onAddToCard={() => onAddToCard(product)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDeitails;
