// export type Product = {
//   id: string;
//   title: string;
//   slug: string;

//   images: string[];        // supports hover swap later
//   price: number;
//   salePrice?: number;

//   category: string;
//   tags?: string[];

//   rating?: number;
//   reviewsCount?: number;

//   isActive: boolean;       // admin control
//   createdAt: string;
// };


export type Product = {
  id: string;

  title: string;
  slug: string;

  // ✅ Gallery-safe (PDP relies on this)
  images: string[];

  price: number;
  salePrice?: number;

  category: string;

  // ✅ PDP-safe
  sizes?: string[];
  description?: string;

  // optional but useful
  rating?: number;
  reviewsCount?: number;

  // admin control
  isActive: boolean;

  createdAt: string;
};
