export type SanityProduct = {
  _id: string;
  title: string;
  price: number;
  slug: string;
  images: any[];
  category?: string;
  sizes?: {
    label: string;
    stock: number;
  }[];
  rating?: number;
  reviewsCount?: number;
  description?: string;
  isFeatured?: boolean;
  inStock?: boolean;
};
