import type { Product, SortOption } from '../types/product'

export const formatPrice = (price: number) => '฿' + price.toLocaleString('en-US')

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(date))

export const filterAndSortProducts = (
  products: Product[],
  search: string,
  categories: string[],
  sortBy: SortOption,
  inStockOnly: boolean,
) => {
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
    const matchesCategory =
      categories.length === 0 || categories.includes(product.category)
    const matchesStock = !inStockOnly || product.inStock

    return matchesSearch && matchesCategory && matchesStock
  })

  return [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'updated-desc':
        return getTime(b.updatedAt) - getTime(a.updatedAt)
      case 'updated-asc':
        return getTime(a.updatedAt) - getTime(b.updatedAt)
      default:
        return 0
    }
  })
}

const getTime = (date: string) => new Date(date).getTime()
