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
				<div>
					<label>All</label>
					{/* <img src=> */}
				</div>
				<div>
					<h3 className="title">Long Only</h3>
					<h4 className="subTitle">Monthly AI Forcast</h4>
					<span className="badge badge-grey"><span className="legends legends-orange"></span> value</span>					
					<span className="badge badge-grey">value</span>					
				</div>
				<div>
					<h3>+ 25.4<span>%</span></h3>
				</div>
				<div>
					<h3>+ 7.6<span>%</span></h3>
				</div>

				<div className="bechmark">
					<h4>IWD</h4>
					<label>Reussel 200 value ETF</label>
				</div>

				<div>
					<Button>Details</Button>
				</div>
				<div>
					<h5>Fee: 10bps mgmnt</h5>
					<label>50% Alpha Share</label>
				</div>
				<div>
					<Button>Suscribe</Button>
					<label>370 Subscribers</label>
				</div>
			</div>
		)
	}
}

export default ExpenseItem;