import React, { Component } from 'react'

export default class Props1 extends Component {
    render() {
        return (
            <div className="card-item">
                <h1>{this.props.name}</h1>
                <img src={this.props.image}  />
                <h3>{this.props.hero}</h3>
            </div>
            
        )
    }
}
