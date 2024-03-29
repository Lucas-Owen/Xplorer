import { unmountComponentAtNode } from "react-dom";
import MapView from "./MapView";
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

describe("Test that MapView component is rendered properly", () => {
  it("should be defined", () => {
    render(<MapView/>, {container});
    const element = container.firstChild;
    expect(element).toBeDefined();
  });
  it("should render a component with class=map-container", ()=>{
    render(<MapView />, {container});
    const element = container.firstChild;
    expect(element).toBeDefined();
    expect(element).toHaveClass("map-container");
  })
});
