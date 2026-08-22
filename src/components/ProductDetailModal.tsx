import { Button, Image, Modal, Space, Tag, Typography } from "antd";
import type { Product } from "../types/product";
import { formatDate, formatPrice } from "../utils/productCatalog.utils";

type ProductDetailModalProps = {
  product: Product | null;
  onClose: () => void;
};

export function ProductDetailModal({
  product,
  onClose,
}: ProductDetailModalProps) {
  return (
    <Modal
      open={Boolean(product)}
      title="Product details"
      footer={
        <Button type="primary" onClick={onClose}>
          Done
        </Button>
      }
      onCancel={onClose}
      centered
    >
      {product && (
        <div className="detail-content">
          <Image
            src={product.image}
            width="100%"
            height={220}
            className="detail-image"
            preview={false}
          />
          <Space direction="vertical" size={4} className="detail-info">
            <Typography.Title level={3}>{product.name}</Typography.Title>
            <Space wrap>
              <Tag className="category-tag">{product.category}</Tag>
              <Tag color={product.inStock ? "success" : "error"}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </Tag>
            </Space>
            <Typography.Title level={4}>
              {formatPrice(product.price)}
            </Typography.Title>
            <Typography.Text type="secondary">
              Last updated {formatDate(product.updatedAt)}
            </Typography.Text>
            <Typography.Paragraph className="description">
              {product.description}
            </Typography.Paragraph>
          </Space>
        </div>
      )}
    </Modal>
  );
}
