import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SpendingItem from './SpendingItem';

describe('SpendingItem Component', ()=> {
    it('renders without crashing' , ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <SpendingItem />
            </BrowserRouter>
           , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})