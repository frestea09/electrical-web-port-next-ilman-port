import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { ListMenu } from "@/components/atoms/list-menu/ListMenu";
describe("Listitem", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ListMenu listMenu={[{ label: "home", link: "/home" }]} />
    );
    const labelHome = getByText("home");
    expect(labelHome).toBeInTheDocument();
  });
});
