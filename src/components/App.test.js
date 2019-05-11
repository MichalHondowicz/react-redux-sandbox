import ReactDOM from "react-dom";
import App from "./App";
import React from 'react';


it('App renders with no problems ',()=>{
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});