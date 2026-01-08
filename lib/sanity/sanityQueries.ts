export const PRODUCTS_QUERY = `
  *[_type == "product" && inStock == true] | order(_createdAt desc){
    _id,
    title,
    price,
    category,
    "slug": slug.current,
    images,
    description,
    isFeatured
  }
`;

export const PRODUCT_BY_SLUG_QUERY = `
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    price,
    category,
    "slug": slug.current,
    images,
    description,
    isFeatured,
    inStock
  }
`;
