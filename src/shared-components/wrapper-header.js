import React, { Component } from 'react';

class WapperHeader extends Component {
	constructor(props)	{
		super(props);
	}

	render() {
		return (
			<>
				<div>Explore Strategies</div>
				<div>Choose what you control and what decisions you want</div>
				<div>Investment Themes</div>

				<div>
					<div>All</div>
					<div>Fundamental Factors</div>
					<div>Alternative Data Factors</div>
					<div>Quant Factors</div>
					<div>Global Factors</div>
				</div>
			</>
		)
	}
}

export default WapperHeader;