import React, { Component } from 'react';

export default class AppContent extends Component {

    state = {posts: []};

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    anotherFunction = () => {
        console.log("anotherFunction");
    }

    leftParagraph = () => {
        console.log("left the paragraph");
    }

    fetchList = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then(json => {
            this.setState({posts: json});
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
                <p onMouseEnter={this.anotherFunction} onMouseLeave={this.leftParagraph}>This is some text</p>
                <button onClick={this.fetchList} className="btn btn-primary">Fetch Data</button>
                <hr />
                <p>Posts is {this.state.posts.length} items long</p>
                <ul>
                    {this.state.posts.map((c) => (
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