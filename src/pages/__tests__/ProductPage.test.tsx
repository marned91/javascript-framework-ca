import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ProductPage } from "../ProductPage";
import * as cartStore from "../../store/cart";

vi.mock("../../store/cart", async () => {
  const actual = await vi.importActual<typeof cartStore>("../../store/cart");
  return {
    ...actual,
    useCartStore: () => ({
      addToCart: vi.fn(),
    }),
  };
});

const mockProduct = {
  id: "test-id",
  title: "Test Product",
  description: "Nice one",
  price: 100,
  discountedPrice: 75,
  image: { url: "test.jpg", alt: "test image" },
  reviews: [],
};

beforeAll(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: mockProduct }),
    }),
  ) as unknown as typeof fetch;
});

afterAll(() => {
  vi.restoreAllMocks();
});

describe("ProductPage", () => {
  it("renders product title from API", async () => {
    render(
      <MemoryRouter initialEntries={["/product/test-id"]}>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText(/test product/i)).toBeInTheDocument();
    });
  });
});
