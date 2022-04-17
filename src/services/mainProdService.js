const mainProduct = [
  {
    id: 1,
    name: "MacBook Pro",
    props: [
      { id: 1, title: "More power." },
      { id: 2, title: "More perfomance." },
      { id: 3, title: "More pro." },
    ],
    price: 1299,
    deitails: [
      { id: 1, title: "4-,6-, and now 8-core Intel processors." },
      { id: 2, title: "Up to 32Gb of memory for running multiple pro apps." },
      { id: 3, title: "Stunning Retina display with Truetone technology." },
      { id: 4, title: "Touch Ber and Touch ID for increased productivity." },
    ],
  },
];

export function getMainProduct() {
  return mainProduct;
}
