import { describe, expect, it } from "vitest";
import { products } from "../data/products";
import { filterAndSortProducts, formatPrice } from "./productCatalog.utils";

describe("product catalog utilities", () => {
  it("filters products by name", () => {
    const result = filterAndSortProducts(products, "keyboard", [], "", false);

    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Mechanical Keyboard");
  });

  it("filters by multiple categories and stock status", () => {
    const result = filterAndSortProducts(
      products,
      "",
      ["Audio", "Keyboard"],
      "",
      true,
    );

    expect(result.every((product) => product.inStock)).toBe(true);
    expect(result.map((product) => product.category)).toEqual([
      "Audio",
      "Audio",
      "Keyboard",
    ]);
  });

  it("sorts products by price from low to high", () => {
    const result = filterAndSortProducts(products, "", [], "price-asc", false);

    expect(result.slice(0, 3).map((product) => product.price)).toEqual([
      850, 990, 1290,
    ]);
  });

  it("sorts products by updated date from newest to oldest", () => {
    const result = filterAndSortProducts(
      products,
      "",
      [],
      "updated-desc",
      false,
    );

    expect(result[0].name).toBe("Bluetooth Speaker");
  });

  it("formats prices in Thai baht", () => {
    expect(formatPrice(1890)).toBe("฿1,890");
  });
});
