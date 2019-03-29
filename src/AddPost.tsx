import React from 'react';
import './css/AddPost.css';
import Button from "./button";

export interface AddPostProps {
  togglePopup: () => void;
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
    body: ''
  };

  render() {
    const {userId, title, body} = this.state;
    return (
      <div className="AddPost-overlay">
        <div className={"AddPost-popup"} >
        <form id="form">
          <h1 className={"AddPost-text"}>Create a Post</h1>
          <div>
            <label className={"AddPost-text"} htmlFor={"username"}> Username: </label>
            <input
                className={"AddPost-input"}
                type={"text"}
                id={"username"}
                value={userId}
                onChange={this.usernameChange}
            />
            <label className={"AddPost-text"} htmlFor={"title"}> Title: </label>
            <input
                className={"AddPost-input"}
                type={"text"}
                id={"title"}
                value={title}
                onChange={this.titleChange}
            />
            <label className={"AddPost-text"} htmlFor={"body"}> Content: </label>
            <textarea
                id={"body"}
                className={"AddPost-textArea"}
                value={body}
                onChange={this.textAreaChange}
            />
          </div>
        </form>
          <div className={"AddPost-buttonContainer"}>
            <Button
                type={"submit"}
                form={"form"}
                onClick={this.submit}
                label={"Submit"}
            />
            <Button onClick={this.props.togglePopup} label={"Close"}/>
          </div>
        </div>
      </div>
    );
  }

  private readonly usernameChange = (event: any) => {
      this.setState({userId: event.target.value})
  };

  private readonly titleChange = (event: any) => {
    this.setState({title: event.target.value})
  };

  private readonly textAreaChange = (event: any) => {


    this.setState({body: event.target.value})
  };

  private readonly createPostJson = () => {
    const {userId, title, body} = this.state;
    return JSON.stringify({ "userId": userId,  "title": title,  "body": body});
  };

  private readonly submit = () => {
    let request = new XMLHttpRequest();

    request.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(this.createPostJson());
  };
}


