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
				</div>
			</div>
		)
	}
}

export default ExpenseItem;