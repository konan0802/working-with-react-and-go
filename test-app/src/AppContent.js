import React, { Component } from 'react';

export default class AppContent extends Component {

    constructor(props) {
        super(props);
        this.handlePostChange = this.handlePostChange.bind(this);
    }

    handlePostChange(posts) {
        this.props.handlePostChange(posts);
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            this.setState({posts: json});
            this.handlePostChange(json);
        })
    }

    clickedItme = (x) => {
        console.log("clicked", x);
    }

    render(){
        return (
            <div>
                This is the content
                <br />
                <hr />
                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>
                <hr />
                <p>Posts is {this.props.posts.length} items long</p>
                <ul>
                    {this.props.posts.map((c) => (
                        <li key={c.id}>
                            <a href="#!" onClick={() => this.clickedItme(c.id)}>
                                {c.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}