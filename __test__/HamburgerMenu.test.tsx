import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { HamburgerMenu } from "@/components/atoms/hamburger-menu/HamburgerMenu";
import "@testing-library/jest-dom";
describe("HamburgerMenu", () => {
  it("renders the menu with a trigger and content", () => {
    const { getByText, getByTestId, getByRole } = render(
      <HamburgerMenu>Menu content</HamburgerMenu>
    );
    screen.debug();
    const trigger = screen.getByRole("menuitem");
    expect(trigger).toBeInTheDocument();
  });
});
