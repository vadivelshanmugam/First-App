import React, { Component } from 'react';
import Productlist from './Productlist';

class CartItem extends Component {
	render() {
		return (
			<div className="cart-items">
	        	<Productlist/>
	        </div>
	    );
	}
}

export default CartItem;