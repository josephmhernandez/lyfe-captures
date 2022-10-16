import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => {
	

	return <Link {...rest} render={(props) => {

		if(localStorage.getItem('cart-id')) {
			return <Component {...props} {...rest}/>
		} else {
			return <Redirect to="/" />
		}

	}} />
}

export default PrivateRoute;