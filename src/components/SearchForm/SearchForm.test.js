import { unmountComponentAtNode } from "react-dom";
import SearchForm from "./SearchForm";
import { render } from "@testing-library/react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  container.id = "root";
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Test that SearchForm component is rendered properly", () => {
  let element = null;
  beforeEach(() => {
    render(<SearchForm />, { container });
    element = container.firstChild;
  });
  it("should be defined", () => {
    expect(element).toBeDefined();
  });
  it("should render a component with class=Search-form", () => {
    expect(element).toBeDefined();
    expect(element).toHaveClass("Search-form");
  });
  it("should render an element with class=dropdowns", () => {
    expect(element.getElementsByClassName("dropdowns")).toHaveLength(1);
  });
});
