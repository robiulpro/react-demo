import React, { Component } from 'react';

class WapperHeader extends Component {
	constructor(props)	{
		super(props);
	}

	render() {
		return (
			<>
				<div className="header-wrapper">
					<h1 className="pageTitle">Explore Strategies</h1>
					<h4 className="pageSubTitle">Choose what you control and what decisions you want</h4>
					<h5 className="pageSubTitle2">Investment Themes</h5>

					<div className="header">
						<div className="headerItem">All</div>
						<div className="headerItem">Fundamental Factors</div>
						<div className="headerItem">Alternative Data Factors</div>
						<div className="headerItem">Quant Factors</div>
						<div className="headerItem">Global Factors</div>
					</div>
					<br />
				</div>
			</>
		)
	}
}

export default WapperHeader;