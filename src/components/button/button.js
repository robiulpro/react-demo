import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { title } = this.props;

        return(
            <>
                <div>{title}</div>
            </>
        );
    }        
}

export default Button;