import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FilterBar } from "./FilterBar";

const defaultProps = {
  search: "",
  categories: [],
  sortBy: "" as const,
  inStockOnly: false,
  categoryOptions: [{ label: "Audio", value: "Audio" }],
  onSearchChange: vi.fn(),
  onCategoriesChange: vi.fn(),
  onSortChange: vi.fn(),
  onStockChange: vi.fn(),
  onReset: vi.fn(),
};

describe("FilterBar", () => {
  it("sends the search text when the input changes", () => {
    const onSearchChange = vi.fn();

    render(<FilterBar {...defaultProps} onSearchChange={onSearchChange} />);

    fireEvent.change(screen.getByPlaceholderText("Search by product name"), {
      target: { value: "dock" },
    });

    expect(onSearchChange).toHaveBeenCalledWith("dock");
  });

  it("sends the stock filter value when the checkbox changes", () => {
    const onStockChange = vi.fn();

    render(<FilterBar {...defaultProps} onStockChange={onStockChange} />);

    fireEvent.click(screen.getByLabelText("In-stock only"));

    expect(onStockChange).toHaveBeenCalledWith(true);
  });
});
