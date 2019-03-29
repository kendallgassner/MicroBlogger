import React from 'react';
import ReactDOM from 'react-dom';
import Post, {PostProps} from './Post';
import './css/Home.css';
import {Link} from "react-router-dom";
import Button from "./button";

export default class Home extends React.Component{
    private messageContainer  = React.createRef<HTMLDivElement>();

    state = {
        showAddPost: false
    };

    componentDidMount() {
        this.grabMessages(this.parseResponse);
    }

    componentDidUpdate() {
        this.grabMessages(this.parseResponse);
    }

    render() {
        return (
            <div>
                <Link to="/Post"><Button  onClick={() => {}} label={"Post"}/></Link>
            <div className={"Home"} ref={this.messageContainer} />
            </div>
        );
    }


    /** Is the best place to make the server request on Render */
    private readonly grabMessages = (callback: (request: string) => void) => {
        let request = new XMLHttpRequest();

        request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

        request.send();

        request.onload = function() {
            if (request.status == 200) {
                callback(request.response);
            }
            else {
                alert(`Loaded: ${request.status} ${request.statusText}`);
            }
        };

        request.onerror = function() {
            alert(`Network Error`);
        };
    };

    private readonly parseResponse = (response: string) => {
        //check if array?
        const jsonResponse = JSON.parse(response);

        if (this.messageContainer && this.messageContainer.current) {
            ReactDOM.render(
                (<ul className={"Home-posts"}>
                    {
                        jsonResponse.map((postProps: PostProps) => {
                            return <Post {...postProps} key={postProps.id}/>;
                        })
                    }
                </ul>),
                this.messageContainer.current);
        }
    };

}

