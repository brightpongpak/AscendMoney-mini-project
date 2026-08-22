import { App as AntApp, Tag, Typography } from 'antd'
import { FilterBar } from './components/FilterBar'
import { ProductDetailModal } from './components/ProductDetailModal'
import { ProductTable } from './components/ProductTable'
import { useProductCatalog } from './hooks/useProductCatalog'
import './App.css'

function Catalog() {
  const {
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
  } = useProductCatalog()

  return (
    <main className="page-shell">
      <header className="page-header">
        <div>
          <Typography.Text className="eyebrow">INVENTORY MANAGEMENT</Typography.Text>
          <Typography.Title level={1}>Product Catalog</Typography.Title>
          <Typography.Paragraph className="subtitle">
            Browse, filter and manage your product inventory.
          </Typography.Paragraph>
        </div>
        <div className="header-stat">
          <Typography.Text type="secondary">Total products</Typography.Text>
          <Typography.Title level={3}>{products.length}</Typography.Title>
        </div>
      </header>

      <FilterBar
        search={search}
        categories={categories}
        sortBy={sortBy}
        inStockOnly={inStockOnly}
        categoryOptions={categoryOptions}
        onSearchChange={onSearchChange}
        onCategoriesChange={onCategoriesChange}
        onSortChange={onSortChange}
        onStockChange={onStockChange}
        onReset={resetFilters}
      />

      <section className="catalog-card">
        <div className="table-toolbar">
          <div>
            <Typography.Title level={4}>All products</Typography.Title>
            <Typography.Text type="secondary">
              {filteredProducts.length} products found
            </Typography.Text>
          </div>
          <Tag color="blue">Live inventory</Tag>
        </div>
        <ProductTable
          products={filteredProducts}
          page={page}
          onPageChange={setPage}
          onEdit={setSelectedProduct}
        />
      </section>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </main>
  )
}

function App() {
  return (
    <AntApp>
      <Catalog />
    </AntApp>
  )
}

export default App
