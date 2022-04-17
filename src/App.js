import React, { Component } from "react";

import MainNav from "./components/nav";
import ProductPage from "./components/productPage";
import ShoppingCard from "./components/shoppingCard";
import Users from "./components/users";
import ProductDeitails from "./components/commen/productDeitails";
import Favorites from "./components/commen/favorites";
import UserDeitails from "./components/commen/userDeitails";
import Footer from "./components/footer";
import NotFound from "./components/commen/notFound";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Paginate } from "./utils/Paginate";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  getProducts,
  updateProduct,
  getProduct,
} from "./services/productService";
import { getGenres } from "./services/genreService";
import { getMainProduct } from "./services/mainProdService";
import { getUsers } from "./services/usersService";
import {
  addToShoppingCard,
  getShoppingCardItems,
  deleteCardItem,
} from "./services/shoppingCardService";

import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  state = {
    products: [],
    pageSize: 6,
    currentPage: 1,
    shoppingCardItems: [],
    genres: [],
    mainProduct: [],
    users: [],
    showCard: false,
    searchQuery: "",
    selectedGenre: null,
  };

  async componentDidMount() {
    const genres = [{ id: "", title: "All Genres" }, ...getGenres()];
    const { data: users } = await getUsers();

    this.setState({
      products: getProducts(),
      shoppingCardItems: getShoppingCardItems(),
      genres,
      mainProduct: getMainProduct(),
      users,
    });
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  handleShowSmallCard = () => {
    this.setState({ showCard: true });
  };

  handleHideSmallCard = () => {
    this.setState({ showCard: false });
  };

  handleLike = (item) => {
    const product = getProduct(item.id);
    product.liked = !product.liked;
    updateProduct(product);

    this.setState({ products: getProducts() });
  };

  handleAddToCard = (item) => {
    const product = getProduct(item.id);
    product.bye = true;
    updateProduct(product);
    this.setState({ products: getProducts() });

    addToShoppingCard(product);
    toast.success("prodect has added to the card");
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleShoppingCardDelete = (item) => {
    const product = getProduct(item.id);
    deleteCardItem(product);
    product.bye = false;
    updateProduct(product);

    this.setState({
      products: getProducts(),
      shoppingCardItems: getShoppingCardItems(),
    });

    toast.error("prodect has been deleted from card");
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1, searchQuery: "" });
  };

  getPagedData = () => {
    const { products, pageSize, currentPage, selectedGenre, searchQuery } =
      this.state;

    let filtered = products;

    if (selectedGenre && selectedGenre.id) {
      filtered = products.filter((p) => p.genre === selectedGenre.title);
    } else if (searchQuery) {
      filtered = products.filter((p) =>
        p.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }

    const productItems = Paginate(filtered, currentPage, pageSize);
    const favProducts = products.filter((p) => p.liked === true);
    return { productItems, favProducts, totaleCount: filtered.length };
  };

  render() {
    const {
      shoppingCardItems,
      genres,
      mainProduct,
      pageSize,
      currentPage,
      selectedGenre,
      users,
      showCard,
      searchQuery,
    } = this.state;

    const { productItems, favProducts, totaleCount } = this.getPagedData();

    return (
      <div className="position-relative container">
        <ToastContainer />
        <MainNav
          shoppingCardItems={shoppingCardItems}
          onShowSmallCard={this.handleShowSmallCard}
        />
        <Switch>
          <Route
            path="/shopping-card"
            render={(props) => (
              <ShoppingCard
                {...props}
                shoppingCardItems={shoppingCardItems}
                onShoppingCardDelete={this.handleShoppingCardDelete}
              />
            )}
          />
          <Route
            path="/favorite"
            render={(props) => (
              <Favorites favProducts={favProducts} {...props} />
            )}
          />
          <Route
            path="/users/:id"
            render={(props) => <UserDeitails {...props} />}
          />
          <Route
            path="/users"
            render={(props) => <Users {...props} users={users} />}
          />
          <Route
            path="/products/:id"
            render={(props) => (
              <ProductDeitails onAddToCard={this.handleAddToCard} {...props} />
            )}
          />
          <Route
            path="/products"
            render={(props) => (
              <ProductPage
                {...props}
                products={productItems}
                shoppingCardItems={shoppingCardItems}
                genres={genres}
                selectedGenre={selectedGenre}
                mainProduct={mainProduct}
                pageSize={pageSize}
                totaleCount={totaleCount}
                currentPage={currentPage}
                searchQuery={searchQuery}
                showCard={showCard}
                onSearch={this.handleSearch}
                onAddToCard={this.handleAddToCard}
                onLike={this.handleLike}
                onPageChange={this.handlePageChange}
                onGenreSelect={this.handleGenreSelect}
                onHideSmallCard={this.handleHideSmallCard}
                onShoppingCardDelete={this.handleShoppingCardDelete}
              />
            )}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" to="/products" />
          <Redirect to="/not-found" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
