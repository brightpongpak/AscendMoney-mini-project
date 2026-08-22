import { Button, Empty, Image, Table, Tag, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined } from "@ant-design/icons";
import type { Product } from "../types/product";
import { formatDate, formatPrice } from "../utils/productCatalog.utils";

type ProductTableProps = {
  products: Product[];
  page: number;
  onPageChange: (page: number) => void;
  onEdit: (product: Product) => void;
};

export function ProductTable({
  products,
  page,
  onPageChange,
  onEdit,
}: ProductTableProps) {
  const columns: ColumnsType<Product> = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
      render: (_, product) => (
        <div className="product-cell">
          <Image
            src={product.image}
            width={48}
            height={48}
            preview={false}
            className="product-thumb"
          />
          <div>
            <Typography.Text strong>{product.name}</Typography.Text>
            <Typography.Text type="secondary" className="product-id">
              SKU-{String(product.id).padStart(4, "0")}
            </Typography.Text>
          </div>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: string) => (
        <Tag className="category-tag">{category}</Tag>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "right",
      render: (price: number) => (
        <Typography.Text strong>{formatPrice(price)}</Typography.Text>
      ),
    },
    {
      title: "Stock status",
      dataIndex: "inStock",
      key: "inStock",
      render: (inStock: boolean) => (
        <Tag color={inStock ? "success" : "error"}>
          {inStock ? "In Stock" : "Out of Stock"}
        </Tag>
      ),
    },
    {
      title: "Last updated",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (date: string) => (
        <Typography.Text type="secondary">{formatDate(date)}</Typography.Text>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "right",
      render: (_, product) => (
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => onEdit(product)}
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={products}
      pagination={{
        current: page,
        pageSize: 5,
        total: products.length,
        onChange: onPageChange,
        showSizeChanger: false,
        position: ["bottomCenter"],
        showTotal: (total, range) => range[0] + "-" + range[1] + " of " + total,
      }}
      locale={{
        emptyText: <Empty description="No products match your filters" />,
      }}
      scroll={{ x: 800 }}
    />
  );
}
