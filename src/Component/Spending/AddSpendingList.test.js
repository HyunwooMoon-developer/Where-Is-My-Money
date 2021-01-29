import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AddSpendingList from './AddSpendingList';

describe('AddSpendingList Component', ()=> {
    it('renders without crashing' , ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Route path={'/add-list'} component={AddSpendingList} />
            </BrowserRouter>
           , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})