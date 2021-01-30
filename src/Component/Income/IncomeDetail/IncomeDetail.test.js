import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import IncomeDetail from './IncomeDetail';

describe('IncomeDetail component', ()=> {
    it(`renders without crashing`, ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Route path={'/incomes/:income_id'} component={IncomeDetail} />
            </BrowserRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})