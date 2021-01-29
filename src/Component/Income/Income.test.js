import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Income from './Income';

describe('Income Component', ()=> {
    it('renders without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
        <BrowserRouter>
            <Income date_created="2021-01-29"/>
        </BrowserRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})