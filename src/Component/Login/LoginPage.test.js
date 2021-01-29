import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './LoginPage';

describe('LoginPage Component', ()=> {
    it('renders without crashing' , ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Route path={'/login'} component={LoginPage} />
            </BrowserRouter>
           , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})