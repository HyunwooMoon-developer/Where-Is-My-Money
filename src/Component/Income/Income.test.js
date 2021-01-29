import React from 'react';
import ReactDOM from 'react-dom';
import Income from './Income';

describe('Income Component', ()=> {
    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(<Income />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})