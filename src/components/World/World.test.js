import { render, screen } from "@testing-library/react";
import { World } from "./World";

test("Hello renders correctly", () => {
  render(<World />);
  const textElement = screen.getByText("World");
  expect(textElement).toBeInTheDocument();
});
