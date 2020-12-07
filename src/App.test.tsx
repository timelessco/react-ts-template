import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  render(<App />);
  const h1Element = screen.getByText(/Hello World/i);
  expect(h1Element).toBeInTheDocument();
});
