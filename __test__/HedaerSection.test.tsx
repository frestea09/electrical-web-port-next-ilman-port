import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { HeaderSection } from "@/components/molecules/HeaderSection/HeaderSection";
import "@testing-library/jest-dom";

describe("header section", () => {
  it("is render", () => {
    const { getByText, getByRole } = render(<HeaderSection />);
    const electricalLable = getByText("Electrical");
    const buttonRole = getByRole("menuitem");
    expect(electricalLable).toBeInTheDocument();
    expect(buttonRole).toBeInTheDocument();
  });
});
