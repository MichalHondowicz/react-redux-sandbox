import ReactDOM from "react-dom";
import Inventory from "./Inventory";
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

describe('Inventory test', () => {
    it('Inventory renders with no problems ', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Inventory/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Inventory rendered', () => {
        const wrapper = shallow(<Inventory/>);
        expect(wrapper.find('div').text()).toBe('Inventory');
    })
});