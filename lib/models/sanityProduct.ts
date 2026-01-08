export type SanityProduct = {
  _id: string;
  title: string;
  price: number;
  slug: string;
  images: any[];
  category?: string;
  sizes?: string[];
  rating?: number;
  reviewsCount?: number;
  description?: string;
  isFeatured?: boolean;
  inStock?: boolean;
};
