import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("renders", () => {
  const { getByText } = render(<Header />);
  getByText("Coco Ulors");
});
