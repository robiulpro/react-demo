import React, { Component } from 'react';
import Badge from '../components/badges/badges';
import Button from '../components/button/button';

class ExpenseItem extends Component {
	constructor(props)	{
		super(props);
	}

	render() {
		return (
			<div className="cardWrapper">
				<div className="item-col">
					<label>All</label>
					{/* <img src=> */}
				</div>
				<div className="item-col">
					<h3 className="title">Long Only</h3>
					<h4 className="subTitle">Monthly AI Forcast</h4>
					<span className="badge badge-grey"><span className="legends legends-orange"></span> value</span>					
					<span className="badge badge-grey">value</span>					
				</div>
				<div className="item-col">
					<h3>+ 25.4<span>%</span></h3>
				</div>
				<div className="item-col">
					<h3>+ 7.6<span>%</span></h3>
				</div>

				<div className="bechmark">
					<h4>IWD</h4>
					<label>Reussel 200 value ETF</label>
				</div>

				<div className="item-col">
					<Button className="">Details</Button>
				</div>
				<div className="item-col">
					<h5>Fee: 10bps mgmnt</h5>
					<label>50% Alpha Share</label>
				</div>
				<div className="item-col">
					<Button className="buttonPrimary">Suscribe</Button>
					<label>370 Subscribers</label>
				</div>
			</div>
		)
	}
}

export default ExpenseItem;