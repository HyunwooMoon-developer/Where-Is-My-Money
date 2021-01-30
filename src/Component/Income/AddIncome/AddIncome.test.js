import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AddIncome from './AddIncome';

describe('AddIncome Component', ()=> {
    it('renders without crashing' , ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Route path={'/add-income'} component={AddIncome} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})