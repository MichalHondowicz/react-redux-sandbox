import ReactDOM from "react-dom";
import Inventory from "./Inventory";
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

describe('Inventory test', () => {
    it('Inventory renders with no problems ', () => {
        const div = document.createElement('div');
        const books = [];
        ReactDOM.render(<Inventory books={books}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Inventory Snapshot ok', () => {
        const books = [];
        const wrapper = shallow(<Inventory books={books}/>);
        expect(wrapper).toMatchSnapshot();
    })
});