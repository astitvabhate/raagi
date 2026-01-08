
import { Product } from "../models/sanityProduct";

export const products: Product[] = [
  {
    id: "1",
    title: "Sunehri Bell Sleeved Short Kurti",
    slug: "1",

    images: [
      "/products/yellow.jpg",
      "/products/brown.jpg",
    ],

    price: 999,
    category: "short-kurti",

    sizes: ["XS", "S", "M", "L", "XL"],

    description:
      "A contemporary short kurti crafted in breathable cotton with elegant bell sleeves. Perfect for everyday comfort with a touch of sophistication.",

    rating: 4.8,
    reviewsCount: 124,

    isActive: true,
    createdAt: new Date().toISOString(),
  },


];
