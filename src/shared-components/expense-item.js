import React, { Component } from 'react';
import Badge from './badges/badges';
import Button from './button/button';

class ExpenseItem extends Component {
	constructor(props)	{
		super(props);
	}

	render() {
		return (
			<div className="cardWrapper">
				<div className="item-col">
					<h3>AI</h3>
					{/* <img src=> */}
				</div>
				<div className="item-col col1">
					<h3 className="title">{this.props.data.STRATEGY}</h3>
					<h4 className="subTitle">Monthly AI Forcast</h4>
					<span className="badge badge-grey"><span className="legends legends-orange"></span>{this.props.data.STRATEGY_TYPE}</span>					
					<span className="badge badge-grey">Value</span>					
				</div>
				<div className="item-col col2">
					<h3>+ {this.props.data.LTM}<span>%</span></h3>
				</div>
				<div className="item-col col3">
					<h3>+ {this.props.data.ALPHA}<span>%</span></h3>
				</div>

				<div className="bechmark col4">
					<h4>{this.props.data.BENCHMARK}</h4>
					<label>Reussel 200 value ETF</label>
				</div>
				<div className="item-col col5">
				<Button title={'Details'} buttonClass={"buttonSecondary"} />
				</div>
				<div className="item-col col6">
					<h5>Fee: {this.props.data.FEE}%</h5>
				</div>
				<div className="item-col col7">
					<Button title={'Subscribe'} buttonClass={"buttonPrimary"} />
					<label>{this.props.data.SUBSCRIBERS} Subscribers</label>
				</div>
			</div>
		)
	}
}

export default ExpenseItem;