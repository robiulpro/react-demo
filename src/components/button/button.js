import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { title, buttonClass } = this.props;

        return(
            <>
                <div className={buttonClass}>{title}</div>
            </>
        );
    }        
}

export default Button;