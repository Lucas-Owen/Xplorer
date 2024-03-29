import { unmountComponentAtNode } from "react-dom";
import App from "./App";
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

describe("Test that App component is rendered in document", () => {
  it("should be in the document", () => {
    render(<App/>, {container});
    const element = container.firstChild;
    expect(element).toBeDefined();
  });
  it("should have the class=App", ()=>{
    render(<App/>, {container});
    const element = container.firstChild;
    expect(element).toHaveClass("App");
  })
});
