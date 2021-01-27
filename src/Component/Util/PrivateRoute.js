import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import TokenService from '../../service/token -service';

const PrivateRoute = ({component, ...props}) => {
    const Component = component;
    
    return (
        <Route 
            {...props}
            render={componentProps=> (
                TokenService.hasAuthToken()
                    ?<Component {...componentProps} />
                    :<Redirect 
                        to={{
                            pathname: '/login',
                            state: {from: componentProps.location}
                        }}
                    />
                )}
        />
    );
};

export default PrivateRoute;