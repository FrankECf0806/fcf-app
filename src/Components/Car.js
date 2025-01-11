import React, { Component } from 'react'

export class Car extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Car Component</h1>
                <h4>My car color is { this.props.color }</h4>
            </div>
        )
    }
}

