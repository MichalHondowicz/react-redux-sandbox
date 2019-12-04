import ReactDOM from "react-dom";
import Order from "./Order";
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Order test", () => {
  it("Order renders with no problems ", () => {
    const div = document.createElement("div");
    const order = [];
    ReactDOM.render(<Order order={order} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Order Snapshot ok", () => {
    const order = [];
    const wrapper = shallow(<Order order={order} />);
    expect(wrapper).toMatchSnapshot();
  });
});
