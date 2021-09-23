import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class Movies extends Component {

    state = {movies: []};

    componentDidMount() {
        this.setState({
            movies: [
                {id: 1, title: "アベンジャーズ", runtime: 142},
                {id: 2, title: "フォルトゥナの瞳", runtime: 175},
                {id: 3, title: "天気の子", runtime: 160},
            ]
        })
    }

    render() {
        return (
            <Fragment>
                <h2>Choose a mivie</h2>
                <ul>
                    {this.state.movies.map((m) => (
                        <li key={m.id}>
                            <Link to={`movies/${m.id}`}>{m.title}</Link>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}