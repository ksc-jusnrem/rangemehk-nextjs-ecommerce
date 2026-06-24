export interface Product {
  id: string;
  name: string;
  urduName: string;
  tagline: string;
  description: string;
  notes: string[];
  volume: string;
  price: number;
  displayPrice: string;
  color: string;
  accent: string;
  image: string;
  theoryImage: string;
}

export const products: Product[] = [
  {
    id: "kashi-blue",
    name: "Kashi Blue",
    urduName: "کاشی بلیو",
    tagline: "The Sacred Glazed Tile",
    description:
      "A cobalt meditation inspired by Multan's Kashi-kari tilework. Cool mineral facets open into a resinous, devotional heart that lingers like the shade of a tiled shrine at dusk.",
    notes: ["Blue Iris", "Cold Mineral Accord", "Frankincense", "Aged Cedar"],
    volume: "30ml",
    price: 0,
    displayPrice: "Contact for Price",
    color: "#003F87",
    accent: "#00A896",
    image: "/kashi-blue.JPG",
    theoryImage: "/kashi-blue1.jpg",
  },
  {
    id: "noor-e-multan",
    name: "Noor-e-Multan",
    urduName: "نورِ ملتان",
    tagline: "The Light of the City of Saints",
    description:
      "Sun-drenched and golden, this radiant attar captures the turquoise domes glowing at noon. Warm amber and saffron melt into soft skin musk for an unhurried, luminous trail.",
    notes: ["Saffron", "Amber", "Orange Blossom", "White Musk"],
    volume: "30ml",
    price: 0,
    displayPrice: "Contact for Price",
    color: "#00A896",
    accent: "#C85A32",
    image: "/noor-e-multan.JPG",
    theoryImage: "/brand1.JPG", 
  },
  {
    id: "wisaal",
    name: "Wisaal",
    urduName: "وصال",
    tagline: "The Union of Clay and Earth",
    description:
      "Wisaal means reunion. Unglazed terracotta, wet earth after rain, and smoked oud form an intimate embrace, grounding the wearer in the raw poetry of mitti.",
    notes: ["Petrichor", "Terracotta Accord", "Smoked Oud", "Vetiver"],
    volume: "30ml",
    price: 0,
    displayPrice: "Contact for Price",
    color: "#C85A32",
    accent: "#132238",
    image: "/wisal.JPG",
    theoryImage: "/wisaal2.jpg",
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
