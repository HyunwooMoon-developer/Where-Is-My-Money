import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AddSpendingItem from './AddSpendingItem';

describe('AddSpendingItem Component', ()=> {
    it('renders without crashing' , ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Route path={'/add-item'} component={AddSpendingItem} />
            </BrowserRouter>
           , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})