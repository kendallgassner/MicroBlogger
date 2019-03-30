import React from 'react';
import '../css/Post.css';

export interface PostProps {
    /** owner who created the post. */
    userId: number;
    /** unique id of the post. */
    id: number;
    /** The title of the post. */
    title: string;
    /** post content. */
    body: string;
}

export default class Post extends React.Component<PostProps> {

  render() {
    const {userId, body, title} = this.props;

    return (
        <li className={"Post-container"}>
           <div>
            <h2 className={"Post-label"} title={title}>{title}</h2>
            <h3 className={"Post-label"} title={`${userId}`}>Username: {userId}</h3>
            </div>
            <p className={"Post-body"}>{body}</p>
        </li>
    );
  }
}

