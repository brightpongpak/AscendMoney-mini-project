export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  updatedAt: string;
  image: string;
  description: string;
};

export type SortOption =
  | ""
  | "price-asc"
  | "price-desc"
  | "updated-desc"
  | "updated-asc";
