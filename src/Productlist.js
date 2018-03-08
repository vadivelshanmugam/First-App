import React, { Component } from 'react';
import SaveForLater from './SaveForLater';
import TotalPrice from './TotalPrice';

class Productlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [{
				name: "Bed",
				price: 103.00,
				color: "Red",
				size: "King"
			},{
				name: "Bed cover",
				price: 23.00,
				color: "Green",
				size: "Queen"
			},{
				name: "Bath towel",
				price: 3.099,
				color: "Blue",
				size: "XL"
			}],
			savelater: []
		};
		this.handleRemove = this.handleRemove.bind(this);
		this.handleSaveForLater = this.handleSaveForLater.bind(this);
	}

	handleRemove(evt) {
		console.log("id", evt.target.dataset.id);
		const newList = this.state.products.filter(function(item, index){
			if(index !== evt.target.dataset.id*1) return item;
		});

		this.setState({
			products: newList
		});
	}

	handleSaveForLater(evt) {
		console.log(evt.target.dataset.id);
		const sflItem = this.state.products.filter(function(item, index){
			if(item.name === evt.target.dataset.name) {
				console.log("====");
				return item;
			}
		});

		const newList = this.state.products.filter(function(item, index){
			if(index !== evt.target.dataset.id*1) return item;
		});

		this.setState({
			products: newList,
			savelater: this.state.savelater.concat(sflItem)
		});
	}

	render() {
		const listItem = this.state.products;
		const self = this;
		let cartTitle = null, totalPrice = null;

		if(listItem.length){
			cartTitle = <h1>Cart Items <span>({listItem.length})</span></h1>;
			totalPrice = <div className="txt-right">Total Price: <TotalPrice dataPrice={this.state.products} /></div>;
		}

		return (
			<div>
				{cartTitle}
				{
					listItem.map(function(v, i){
						return (<div className="product-list" key={i}>
					        	<div>{v.name}</div>
					        	<div className="red-txt">${v.price.toFixed(2)}</div>
					        	<div className="prod-prop">Color: {v.color} | Size: {v.size}</div>
					        	<button data-id={i} onClick={self.handleRemove}>Remove</button>&nbsp;
					        	<button data-id={i} data-name={v.name} onClick={self.handleSaveForLater}>Save for later</button>
					        </div>
						)
					})
				}
				{totalPrice}
				<SaveForLater data={this.state.savelater} dataCart={this.state.products} />
		    </div>
	    );
	}
}

export default Productlist;