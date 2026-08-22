import { useMemo, useState } from "react";
import { products } from "../data/products";
import type { Product, SortOption } from "../types/product";
import { filterAndSortProducts } from "../utils/productCatalog.utils";

export function useProductCatalog() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categoryOptions = useMemo(
    () =>
      [...new Set(products.map((product) => product.category))].map(
        (category) => ({ label: category, value: category }),
      ),
    [],
  );

  const filteredProducts = useMemo(
    () =>
      filterAndSortProducts(products, search, categories, sortBy, inStockOnly),
    [search, categories, sortBy, inStockOnly],
  );

  const updateFilter = <T>(setter: (value: T) => void, value: T) => {
    setter(value);
    setPage(1);
  };

  const resetFilters = () => {
    setSearch("");
    setCategories([]);
    setSortBy("");
    setInStockOnly(false);
    setPage(1);
  };

  const onSearchChange = (value: string) => updateFilter(setSearch, value);
  const onCategoriesChange = (value: string[]) =>
    updateFilter(setCategories, value);
  const onSortChange = (value: SortOption) => updateFilter(setSortBy, value);
  const onStockChange = (value: boolean) => updateFilter(setInStockOnly, value);

  return {
    products,
    search,
    categories,
    sortBy,
    inStockOnly,
    page,
    selectedProduct,
    categoryOptions,
    filteredProducts,
    setSelectedProduct,
    setPage,
    resetFilters,
    onSearchChange,
    onCategoriesChange,
    onSortChange,
    onStockChange,
  };
}
