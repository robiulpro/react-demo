import React, { Component } from 'react';

class WapperHeader extends Component {
	constructor(props)	{
		super(props);
	}

	render() {
		return (
			<>
				<div className="header-wrapper">
					<div>Explore Strategies</div>
					<div>Choose what you control and what decisions you want</div>
					<div>Investment Themes</div>

					<div className="header">
						<div className="headerItem">All</div>
						<div className="headerItem">Fundamental Factors</div>
						<div className="headerItem">Alternative Data Factors</div>
						<div className="headerItem">Quant Factors</div>
						<div className="headerItem">Global Factors</div>
					</div>
				</div>
			</>
		)
	}
}

export default WapperHeader;