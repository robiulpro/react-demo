import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props);
    }

    state = {
        title: 'sdsd',
        primary: 'buttonPrimary'        
    }

    render(){
        const { title } = this.props;

        return(
            <>
                <div>{'button name'}</div>
            </>
        );
    }        
}

export default Button;