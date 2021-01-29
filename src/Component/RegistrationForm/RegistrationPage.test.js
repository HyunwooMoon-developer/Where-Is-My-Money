import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import RegistrationPage from './RegistrationPage';

describe('Registration Component', ()=> {
    it('renders without crashing' , ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Route path={'/register'} component={RegistrationPage} />
            </BrowserRouter>
           , div);
        ReactDOM.unmountComponentAtNode(div);
    })
})