import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OrderItem from "./OrderItem";

configure({ adapter: new Adapter() });

describe("Order test", () => {
  it("OrderItem Snapshot ok", () => {
    const book = {
      name: "Book Title"
    };
    const wrapper = shallow(<OrderItem book={book} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("OrderItem book props ok", () => {
    const book = {
      name: "Book Title"
    };
    const wrapper = shallow(<OrderItem book={book} />);
    expect(wrapper.find(".orderItem").text()).toBe(book.name);
  });
});
