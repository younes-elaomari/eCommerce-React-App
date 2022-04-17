const shoppingCardItems = [];

export function getShoppingCardItems() {
  return shoppingCardItems;
}

export function deleteCardItem(item) {
  shoppingCardItems.splice(shoppingCardItems.indexOf(item), 1);
}

export function addToShoppingCard(item) {
  return shoppingCardItems.push(item);
}
