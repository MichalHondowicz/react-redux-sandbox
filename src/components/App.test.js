import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App test", () => {
  it("App renders with no problems ", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Subcomponents render", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header").exists()).toBe(true);
    expect(wrapper.find("Inventory").exists()).toBe(true);
    expect(wrapper.find("Order").exists()).toBe(true);
    expect(wrapper.find("AdminPanel").exists()).toBe(true);
  });
});
