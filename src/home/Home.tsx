import React from 'react';
import Post, {PostProps} from '../post/Post';
import '../css/Home.css';
import {Link} from 'react-router-dom';
import {getRequest} from '../services/Request';
import PostList from '../postList/PostList';

interface HomeProps {
  /** A function used to send updates to the notification banner */
  updateBanner: (message: string, isError: boolean) => void;
}

interface HomeState {
  postList: Array<PostProps>;
}

export default class Home extends React.Component<HomeProps, HomeState> {
  state = {postList: []};

  componentDidMount() {
    this.requestData();
  }

  render() {
    const {postList} = this.state;
    return (
      <div>
        <Link to="/Post" className={'Home-Button'} role={'button'}>
          <h3 className={'Home-Button-label'} title={'Post'}>
            Post
          </h3>
        </Link>

        {postList.length > 0 && <PostList list={postList} />}
      </div>
    );
  }

  private readonly parseResponseForPosts = (response: string) => {
    const jsonResponse = JSON.parse(response);
    this.setState({postList: jsonResponse});
  };

  private readonly requestData = () => {
    getRequest('https://jsonplaceholder.typicode.com/posts')
      .then(request => {
        this.parseResponseForPosts(request as string);
      })
      .catch(errorMessage => {
        this.props.updateBanner(errorMessage, true);
      });
  };
}
