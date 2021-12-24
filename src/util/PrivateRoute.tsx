import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'

const PrivateRoute: React.FC<RouteProps> = ({component: Component, ...rest}: RouteProps) => {
    if (!Component) return null;
    const token = localStorage.getItem("bearer")
    const isLoggedIn = token !== null && token !== undefined
    return (
        <Route {...rest} render={props =>
            isLoggedIn ? <Component {...props} /> : <Redirect to={{pathname: '/auth/login', state: {from: props.location}}} />
        } />
    )
}

export default PrivateRoute;