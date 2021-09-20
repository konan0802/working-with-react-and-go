import React, { Component } from 'react';
//import './AppHeader.css';

export default class AppHeader extends Component {
    render() {
        const currentYear = new Date().getFullYear();
        return (
            <h1>Hello, World!</h1>
        )
    }
}
