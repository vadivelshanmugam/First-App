import React, { Component } from 'react';

class SFLItem extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let sflTitle = null;

		if(this.props.data.length){
			sflTitle = <h1>Save For Later ({this.props.data.length})</h1>;
		}

		return (
			<div>
				{sflTitle}
				<div className="cart-items">
		        	{
		        		this.props.data.map(function(v, i){
		        			return (<div className="product-list" key={i}>
						        	<div>{v.name}</div>
						        	<div className="red-txt">${v.price.toFixed(2)}</div>
						        	<div className="prod-prop">Color: {v.color} | Size: {v.size}</div>
						        	<button data-id={i}>Move to Cart</button>
						        </div>
							)
			        	})
		        	}
		        </div>
	        </div>
	    );
	}
}

export default SFLItem;