import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import EditSpendingItem from './EditSpendingItem';

describe('EditSpendingItem Component', ()=> {
    it('renders without crashing' , ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Route path={'/edit/sitems/:sitem_id'} component={EditSpendingItem} />
            </BrowserRouter>
           , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})