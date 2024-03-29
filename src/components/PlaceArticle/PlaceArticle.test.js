import { unmountComponentAtNode } from "react-dom";
import PlaceArticle from "./PlaceArticle";
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

describe("Test that PlaceArticle component is rendered properly", () => {
  it("should be defined", () => {
    render(<PlaceArticle/>, {container});
    const element = container.firstChild;
    expect(element).toBeDefined();
  });
  it("should render a component with class=Place-article if it receives a place with a name", ()=>{
    render(<PlaceArticle location={{place: {name: "Somewhere"}}}/>, {container});
    const element = container.firstChild;
    expect(element).toBeDefined();
    expect(element).toHaveClass("Place-article");
  })
});
