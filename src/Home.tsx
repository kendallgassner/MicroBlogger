import React from 'react';
import ReactDOM from 'react-dom';
import Post, {PostProps} from './Post';
import './css/Home.css';
import {Link} from "react-router-dom";
import Button from "./button";
import {getRequest} from "./Request";

export default class Home extends React.Component{
    private messageContainer  = React.createRef<HTMLDivElement>();

    state = {
        showAddPost: false
    };

    componentDidMount() {
        getRequest('https://jsonplaceholder.typicode.com/posts').then(
            (request : any) => {
                this.parseResponse(request);
            });
    }

    componentDidUpdate() {
        getRequest('https://jsonplaceholder.typicode.com/posts').then(
            (request : any) => {
                this.parseResponse(request);
        });
    }

    render() {
        return (
            <div>
                <Link to="/Post"><Button  onClick={() => {}} label={"Post"}/></Link>
            <div className={"Home"} ref={this.messageContainer} />
            </div>
        );
    }

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

