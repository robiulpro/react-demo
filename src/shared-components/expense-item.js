import React, { Component } from 'react';
import Badge from '../components/badges/badges'

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