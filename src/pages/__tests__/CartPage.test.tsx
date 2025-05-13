import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CartPage } from "../CartPage";
import { MemoryRouter } from "react-router-dom";
import * as cartStore from "../../store/cart";

vi.mock("../../store/cart", async () => {
  const actual = await vi.importActual<typeof cartStore>("../../store/cart");
  return {
    ...actual,
    useCartStore: (selector: any) => selector({ cart: [] }),
  };
});

describe("CartPage", () => {
  it("renders <EmptyCart /> when cart is empty", () => {
    render(
      <MemoryRouter>
        <CartPage />
      </MemoryRouter>,
    );

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});
