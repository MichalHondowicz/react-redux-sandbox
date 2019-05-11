import ReactDOM from "react-dom";
import Header from "./Header";
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

describe('Header test', () => {
    it('Header renders with no problems ', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Header rendered', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('h1').text()).toBe('Header');
    })
});