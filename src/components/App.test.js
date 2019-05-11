import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});

describe('App test', () => {
    it('App renders with no problems ', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});


