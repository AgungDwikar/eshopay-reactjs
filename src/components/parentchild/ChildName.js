import React, { Component } from 'react'

export default class ChildName extends Component {
    render() {
        return (
            <div>
                <h2> First Name : {this.props.firstName}</h2>
                <h2> Last Name : {this.props.lastName}</h2>
            </div>
        )
    }
}
