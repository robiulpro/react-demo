import React, { Component } from 'react';
import { getStrategyData } from "../utils/APIService";
import WapperHeader from '../shared-components/wrapper-header';
import ExpenseItem from '../shared-components/expense-item';

class ParentWrapper extends Component {
	constructor(props)	{
		super(props);
    this.state = {
      data : []
    }
	}

	componentDidMount() {
		getStrategyData()
	    .then(response => {
	      console.log("succ================getStrategyData");
	      console.log(response);
        this.setState({data : response})
	    })
	    .catch(error => {
	      console.log("err================getStrategyData");
	      console.log(error);
	    });
	}

	render() {
		return (
			<>
				<WapperHeader />
				{this.state.data.map((strategy, index) => (
				<ExpenseItem key={index} data={strategy}/>
				))}
			</>
		)
	}
}

export default ParentWrapper;