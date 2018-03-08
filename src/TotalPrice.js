import React, { Component } from 'react';

class TotalPrice extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let totalPrice = 0;
		return (
			<span>$
	        	{
	        		this.props.dataPrice.map(function(v, i){
	        			totalPrice = totalPrice + v.price;	        			
		        	})
	        	}
	        	{totalPrice.toFixed(2)}
	        </span>
	    );
	}
}

export default TotalPrice;