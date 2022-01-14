import React, { Component } from "react";
import ChildName from "./ChildName";

export default class ParentName extends Component {
    state = {
        firstName: "Agung",
        lastName : "Dwika"
    };

    render() {
        return (
            <ChildName
                firstName={this.state.firstName}
                lastName={this.state.lastName}
            />
        );
    }
}
