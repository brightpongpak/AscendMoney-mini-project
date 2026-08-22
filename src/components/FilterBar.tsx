import { Button, Checkbox, Input, Select, Typography } from "antd";
import { ClearOutlined, SearchOutlined } from "@ant-design/icons";
import type { SortOption } from "../types/product";

type FilterBarProps = {
  search: string;
  categories: string[];
  sortBy: SortOption;
  inStockOnly: boolean;
  categoryOptions: { label: string; value: string }[];
  onSearchChange: (value: string) => void;
  onCategoriesChange: (value: string[]) => void;
  onSortChange: (value: SortOption) => void;
  onStockChange: (value: boolean) => void;
  onReset: () => void;
};

const sortOptions = [
  { label: "Price: Low to high", value: "price-asc" },
  { label: "Price: High to low", value: "price-desc" },
  { label: "Recently updated", value: "updated-desc" },
  { label: "Oldest updated", value: "updated-asc" },
];

export function FilterBar({
  search,
  categories,
  sortBy,
  inStockOnly,
  categoryOptions,
  onSearchChange,
  onCategoriesChange,
  onSortChange,
  onStockChange,
  onReset,
}: FilterBarProps) {
  return (
    <section className="filter-panel">
      <div className="filter-heading">
        <div>
          <Typography.Title level={4}>Find products</Typography.Title>
          <Typography.Text type="secondary">
            Use the filters below to narrow your results.
          </Typography.Text>
        </div>
        <Button icon={<ClearOutlined />} onClick={onReset}>
          Reset filters
        </Button>
      </div>

      <div className="filter-grid">
        <div className="field">
          <Typography.Text strong>Search</Typography.Text>
          <Input
            allowClear
            prefix={<SearchOutlined />}
            placeholder="Search by product name"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </div>
        <div className="field">
          <Typography.Text strong>Category</Typography.Text>
          <Select
            mode="multiple"
            allowClear
            placeholder="All categories"
            options={categoryOptions}
            value={categories}
            onChange={onCategoriesChange}
          />
        </div>
        <div className="field">
          <Typography.Text strong>Sort by</Typography.Text>
          <Select
            allowClear
            placeholder="Default order"
            value={sortBy || undefined}
            options={sortOptions}
            onChange={(value) => onSortChange(value || "")}
          />
        </div>
        <div className="stock-filter">
          <Checkbox
            checked={inStockOnly}
            onChange={(event) => onStockChange(event.target.checked)}
          >
            In-stock only
          </Checkbox>
        </div>
      </div>
    </section>
  );
}
