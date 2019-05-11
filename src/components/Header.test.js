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

    it('Header changed text when setState', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('h1').text()).toBe('Magic books');
        wrapper.setState({
            bookstoreName: 'Black books'
        });
        expect(wrapper.find('h1').text()).toBe('Black books');
    });

    it('Header state changed with onClick', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.state().bookstoreName).toBe('Magic books');
        wrapper.find('.header').simulate('click');
        expect(wrapper.state().bookstoreName).toBe('Black books');
    });

    it('Snapshot ok', () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper).toMatchSnapshot();
    })
});