import React from 'react';
import '../css/AddPost.css';
import Button from '../button/button';
import {postRequest} from '../services/Request';

const MAX_LENGTH = 140;
const MIN_LENGTH = 10;

export interface AddPostProps {
  /** A function used to send updates to the notification banner */
  updateBanner: (message: string, isError: boolean) => void;
}

export interface AddPostState {
  userId: string;
  title: string;
  body: string;
}

export default class AddPost extends React.Component<AddPostProps, AddPostState> {
  state = {
    userId: '',
    title: '',
    body: '',
  };

  render() {
    const {userId, title, body} = this.state;

    return (
      <div className={'AddPost'}>
        <form id="form">
          <h1>Create a Post</h1>
          <div>
            <label htmlFor={'username'}> Username: </label>
            <input
              className={'AddPost-input'}
              type={'text'}
              id={'username'}
              value={userId}
              onChange={this.usernameChange}
            />
            <label htmlFor={'title'}> Title: </label>
            <input
              className={'AddPost-input'}
              type={'text'}
              id={'title'}
              value={title}
              onChange={this.titleChange}
            />
            <label htmlFor={'body'}> Content: </label>
            <textarea
              id={'body'}
              className={'AddPost-textArea'}
              value={body}
              onChange={this.textAreaChange}
            />
          </div>
        </form>
        <h5 className={'AddPost-limitWarning'}>
          {body.length}/{MAX_LENGTH}
        </h5>
        <div className={'AddPost-buttonContainer'}>
          <Button onClick={this.submit} label={'Submit'} />
          <Button onClick={this.close} label={'Close'} />
        </div>
      </div>
    );
  }

  private readonly usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({userId: event.target.value});
  };

  private readonly titleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({title: event.target.value});
  };

  private readonly textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({body: event.target.value});
  };

  private readonly createPostJson = () => {
    const {userId, title, body} = this.state;
    const post: any = {};
    post.userId = userId;
    post.title = title;
    post.body = body;

    return JSON.stringify(post);
  };

  private readonly close = () => {
    (this.props as any).history.goBack();
  };

  private readonly submit = () => {
    const {body} = this.state;

    if (body.length < MIN_LENGTH || body.length > MAX_LENGTH) {
      alert(`Error character count must be >= ${MIN_LENGTH} and <= ${MAX_LENGTH}`);
      return;
    } else {
      postRequest('https://jsonplaceholder.typicode.com/posts', this.createPostJson())
        .then(successMessage => {
          this.props.updateBanner(successMessage as string, false);
        })
        .catch(errorMessage => {
          this.props.updateBanner(errorMessage, true);
        });
    }

    this.close();
  };
}
