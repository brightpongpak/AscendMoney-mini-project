import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ProductDetailModal } from "./ProductDetailModal";
import type { Product } from "../types/product";

const product: Product = {
  id: 1,
  name: "Bluetooth Speaker",
  price: 1890,
  category: "Audio",
  inStock: true,
  updatedAt: "2025-11-15T11:12:55",
  image: "https://picsum.photos/seed/speaker/160/160",
  description: "Portable wireless speaker with rich sound.",
};

describe("ProductDetailModal", () => {
  it("shows the selected product details", () => {
    render(<ProductDetailModal product={product} onClose={vi.fn()} />);

    expect(screen.getByText("Bluetooth Speaker")).toBeInTheDocument();
    expect(
      screen.getByText("Portable wireless speaker with rich sound."),
    ).toBeInTheDocument();
    expect(screen.getByText("฿1,890")).toBeInTheDocument();
    expect(screen.getByText("In Stock")).toBeInTheDocument();
  });

  it("calls onClose when the user clicks Done", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    render(<ProductDetailModal product={product} onClose={onClose} />);

    await user.click(screen.getByRole("button", { name: "Done" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
