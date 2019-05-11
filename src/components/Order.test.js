import ReactDOM from "react-dom";
import Order from "./Order";
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'


configure({adapter: new Adapter()});

describe('Order test', () => {
    it('Order renders with no problems ', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Order/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Inventory rendered', () => {
        const wrapper = shallow(<Order/>);
        expect(wrapper.find('div').text()).toBe('Order');
    });

    it('Snapshot ok', () => {
        const wrapper = shallow(<Order/>);
        expect(wrapper).toMatchSnapshot();
    })
});