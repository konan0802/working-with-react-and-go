import React, { Component } from 'react';
//import './AppHeader.css';

export default class AppHeader extends Component {
    render() {
        return (
            <h1>{this.props.favorite_color}</h1>
        )
    }
}
