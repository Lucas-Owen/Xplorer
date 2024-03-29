import { unmountComponentAtNode } from "react-dom";
import DropDown from "./DropDown";
import { render } from "@testing-library/react";

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

describe("Test that DropDown component is rendered properly", () => {
  it("should be defined", () => {
    render(<DropDown />, { container });
    const element = container.firstChild;
    expect(element).toBeDefined();
  });
  it("should render a component with class=DropDown", () => {
    render(<DropDown />, { container });
    const element = container.firstChild;
    expect(element).toBeDefined();
    expect(element).toHaveClass("DropDown");
  });
  it("should render items prop in an unordered list", () => {
    const items = ["A", "B", "C"];
    render(<DropDown items={items} />, { container });
    const element = container.firstChild;
    const uls = element.getElementsByTagName("ul");
    expect(uls).toHaveLength(1);
    const lis = uls[0].getElementsByTagName("li");
    expect(lis).toHaveLength(items.length);
    for (let li of lis) {
      expect(items.includes(li.textContent)).toBe(true);
    }
  });
});
