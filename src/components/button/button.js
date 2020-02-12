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
                <Button>[title]</Button>
            </>
        );
    }        
}

export default Button;