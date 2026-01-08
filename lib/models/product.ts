export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;

  category?: string;
  sizes?: {
  label: string;
  stock: number;
  }[];


  image?: any;      // primary image
  images?: any[];   // gallery images
  description?: string;

  isActive?: boolean;
};
