import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenService from '../../service/token -service';

const PublicRoute = ({component, props}) => {
    const Component = component;
    
    return (
        <Route 
            {...props}
            render={componentProps=>(
                TokenService.hasAuthToken()
                    ?<Redirect to={'/'} />
                    : <Component {...componentProps} />
            )}
        />
    );
};

export default PublicRoute;