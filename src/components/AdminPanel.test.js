import ReactDOM from "react-dom";
import AdminPanel from "./AdminPanel";
import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

describe('AdminPanel test', () => {
    it('AdminPanel renders with no problems ', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AdminPanel/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Snapshot ok', () => {
        const wrapper = shallow(<AdminPanel/>);
        expect(wrapper).toMatchSnapshot();
    })
});