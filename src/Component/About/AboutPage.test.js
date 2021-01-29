import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './AboutPage';

describe('About Component', ()=> {
    it('Responds without crashing', ()=> {
        const div = document.createElement('div');
        ReactDOM.render(
           <BrowserRouter>
                <Route path={'/about'} component={AboutPage} />
           </BrowserRouter>,div
        )
        ReactDOM.unmountComponentAtNode(div);
    })
})