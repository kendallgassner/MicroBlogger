import React from 'react';
import ReactDOM from 'react-dom';
import './css/Post.css';

export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default class Post extends React.Component<PostProps> {

  render() {
    const {userId, body, title} = this.props;

    return (
        <li className={"Post-container"}>
           <div>
            <h2>{title}</h2>
            <h3 >Username: {userId}</h3>
            </div>
            <p className={"Post-body"}>{body}</p>
        </li>
    );
  }
}

