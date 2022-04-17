const favorites = [];

export function getFavorites() {
  return favorites;
}

export function addToFavorites(item) {
  return favorites.push(item);
}
