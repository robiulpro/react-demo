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
					<label>AI</label>
					{/* <img src=> */}
				</div>
				<div className="item-col">
					<h3 className="title">Long Only</h3>
					<h4 className="subTitle">Monthly AI Forcast</h4>
					<span className="badge badge-grey"><span className="legends legends-orange"></span> {this.props.data.STRATEGY_TYPE}</span>					
					<span className="badge badge-grey">Value</span>					
				</div>
				<div className="item-col">
					<h3>{this.props.data.LTM}<span>%</span></h3>
				</div>
				<div className="item-col">
					<h3>{this.props.data.ALPHA}<span>%</span></h3>
				</div>

				<div className="bechmark">
					<h4>{this.props.data.BENCHMARK}</h4>
					<label>Reussel 200 value ETF</label>
				</div>
				<div className="item-col">
					<Button title={'Details'} />
				</div>
				<div className="item-col">
					<h5>Fee: 10bps mgmnt</h5>
					<label>50% Alpha Share</label>
				</div>
				<div className="item-col">
					<Button title={'Subscribe'} />
					<label>370 Subscribers</label>
				</div>
			</div>
		)
	}
}

export default ExpenseItem;