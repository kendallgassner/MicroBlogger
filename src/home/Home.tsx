import React from 'react';
import ReactDOM from 'react-dom';
import Post, {PostProps} from '../Post/Post';
import '../css/Home.css';
import {Link} from "react-router-dom";
import Button from "../button/button";
import {getRequest} from "../services/Request";


interface HomeProps {
    /** A function used to send updates to the notification banner */
    updateBanner: (message: string, isError: boolean) => void;
}
export default class Home extends React.Component<HomeProps>{
    private messageContainer  = React.createRef<HTMLDivElement>();

    componentDidMount() {
        this.requestData();
    }

    render() {
        return (
            <div>
                <Link to="/Post"><Button label={"Post"}/></Link>
            <div className={"Home"} ref={this.messageContainer} />
            </div>
        );
    }

    private readonly parseResponseForPosts = (response: string) => {
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

    private readonly requestData = () => {
        getRequest('https://jsonplaceholder.typicode.com/posts').then(
            request => {
                this.parseResponseForPosts(request as string);
            })
            .catch(errorMessage  => {
                this.props.updateBanner(errorMessage, true);
            });
    };

}

