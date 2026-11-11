import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders the correct child components", () => {
  const { container } = render(<App />);
  console.log(container.innerHTML);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App .header")).toBeInTheDocument();
  expect(container.querySelector(".App .about")).toBeInTheDocument();
  expect(container.querySelector(".App .articlelist")).toBeInTheDocument();
});
