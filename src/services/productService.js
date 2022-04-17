const products = [
  {
    id: "1",
    src: "imgs/lp-1.png",
    name: "Apple - MacBook Pro 15.",
    price: "1999.99",
    description:
      "I'm baby farm-to-table mustache fam pug jianbing. ugh banh mi shabby chic. Pug cray street art waistcoat polaroid distillery everyday.",
    genre: "Labtop",
    bye: false,
    liked: false,
  },
  {
    id: "2",
    src: "imgs/hp-1.png",
    name: "HUAWEI FreeBuds Pro",
    price: "30",
    description:
      "carry gluten-free gochujang. messenger bag cloud bread affogato. Salvia williamsburg chicharrones, chia tumeric four dollar toast flexitarian pinterest gastropub flannel?",
    genre: "HeadPhone",
    bye: false,
    liked: false,
  },
  {
    id: "3",
    src: "imgs/hp-2.png",
    name: "Dell Pro Wireless Headset",
    price: "195",
    description:
      "Kale chips brunch put a bird on it. Gluten-free try-hard fingerstache drinking vinegar DIY, iceland hella mumblecore taxidermy whatever. Glossier unicorn single-origin",
    genre: "HeadPhone",
    bye: false,
    liked: false,
  },
  {
    id: "4",
    src: "imgs/ph-1.png",
    name: "Redmi Note 12 Pro",
    price: "490",
    description:
      "coffee thundercats next level. heard of them +1 viral swag banh mi mustache copper mug. Live-edge vape lyft drinking vinegar locavore. Photo booth gluten-free paleo glossier, you probably haven't heard of them mustache vexillologist single-origin coffee skateboard fingerstache pug. Brooklyn tumeric health goth lyft.",
    genre: "Phone",
    bye: false,
    liked: false,
  },
  {
    id: "5",
    src: "imgs/hp-3.png",
    name: "AirPods Pro",
    price: "249",
    description:
      " umami echo park hammock activated taiyaki pinterest raclette. Pork belly quinoa migas bicycle rights beard.",
    genre: "HeadPhone",
    bye: false,
    liked: false,
  },
  {
    id: "6",
    src: "imgs/lp-2.png",
    name: "Apple MacBook Air M1",
    price: "676",
    description:
      "You probably haven't heard of them everyday carry cornhole copper. VHS ethical kitsch, umami echo park hammock activated charcoal taiyaki.",
    genre: "Labtop",
    bye: false,
    liked: false,
  },
  {
    id: "7",
    src: "imgs/ph-2.png",
    name: "Samsung Galaxy Note N7000 ",
    price: "219",
    description:
      "Cornhole fanny pack butcher truffaut, enamel Tattooed lumbersexual tousled pabst ramps stumptown narwhal. Lo-fi man bun.",
    genre: "Phone",
    bye: false,
    liked: false,
  },
  {
    id: "8",
    src: "imgs/hp-4.png",
    name: "Galaxy Buds2",
    price: "19",
    description:
      "polaroid flexitarian. Venmo polaroid meditation schlitz art party. dreamcatcher keffiyeh. Yuccie typewriter lomo normcore kogi distillery. Gluten-free food truck selvage man braid readymade polaroid.",
    genre: "HeadPhone",
    bye: false,
    liked: false,
  },
  {
    id: "9",
    src: "imgs/lp-3.png",
    name: "Lenovo ThinkPad E15",
    price: "299",
    description:
      "booth bushwick put a bird on it coloring book. master cleanse roof party post-ironic kitsch photo booth mlkshk. Cray irony keytar mlkshk, chillwave palo santo subway tile master cleanse williamsburg XOXO offal blog paleo DIY adaptogen.",
    genre: "Labtop",
    bye: false,
    liked: false,
  },
  {
    id: "10",
    src: "imgs/ph-3.png",
    name: "iPhone XS Max",
    price: "659",
    description:
      "Health goth wayfarers gastropub blog. Roof party viral cronut venmo taxidermy woke. biodiesel knausgaard synth meh polaroid banjo man bun 90's paleo.",
    genre: "Phone",
    bye: false,
    liked: false,
  },
  {
    id: "11",
    src: "imgs/lp-4.png",
    name: "Dell Vostro 3500",
    price: "619",
    description:
      "Single-origin coffee offal chicharrones. Edison bulb kombucha meditation tumeric, hella brunch scenester austin bicycle rights. Viral trust fund wayfarers tattooed, +1 live-edge bicycle rights sustainable waistcoat franzen occupy sartorial hammock cloud bread. Post-ironic",
    genre: "Labtop",
    bye: false,
    liked: false,
  },
  {
    id: "12",
    src: "imgs/hp-5.png",
    name: "WH-1000XM4",
    price: "99.99",
    description:
      "taxidermy art party bicycle rights ennui, snackwave selvage ramps, woke ennui tote bag hot chicken swag unicorn keffiyeh. Lyft woke umami, roof party williamsburg +1 flexitarian gluten-free helvetica brooklyn. Man braid messenger bag hashtag gochujang biodiesel before they sold out wolf sartorial.",
    genre: "HeadPhone",
    bye: false,
    liked: false,
  },
  {
    id: "13",
    src: "imgs/ph-4.png",
    name: "Strawberry Milkshake",
    price: "269",
    description:
      "Crucifix gentrify church-key slow-carb hoodie health goth craft beer helvetica. Tumeric marfa meggings, air plant four dollar toast copper mug cornhole. Wolf iceland four dollar toast leggings small batch migas affogato try-hard. Deep v cold-pressed raw denim lyft.",
    genre: "Phone",
    bye: false,
    liked: false,
  },
  {
    id: "14",
    src: "imgs/ph-5.png",
    name: "Huawei Nova 8 Pro",
    price: "599",
    description:
      "Chambray wolf vice fixie pabst pour-over. etsy air plant cloud bread meditation normcore man braid crucifix raw denim. PBR&B ugh hoodie viral, glossier intelligentsia tattooed mlkshk listicle stumptown photo",
    genre: "Phone",
    bye: false,
    liked: false,
  },
  {
    id: "15",
    src: "imgs/lp-5.png",
    name: "HP Chromebook.",
    price: "999",
    description:
      "vexillologist blue bottle XOXO cred. Craft beer everyday carry listicle jean shorts plaid farm-to-table tofu YOLO wolf synth helvetica palo santo. Aesthetic pour-over cold-pressed kombucha.",
    genre: "Labtop",
    bye: false,
    liked: false,
  },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((e) => e.id === id);
}

export function updateProduct(product) {
  let productInDb = products.find((p) => p.id === product.id);
  productInDb.bye = product.bye;
  productInDb.liked = product.liked;
  return productInDb;
}
