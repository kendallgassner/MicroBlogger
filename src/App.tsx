import React from 'react';
import ReactDOM from 'react-dom';
import Post, {PostProps} from './Post';
import AddPost from "./AddPost";
import './css/App.css';
import Button from "./button";

interface AppState {
    showAddPost: boolean;
}

export default class App extends React.Component<{}, AppState> {
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
    const {showAddPost} = this.state;

    return (
      <div className="App">
        {showAddPost && <AddPost togglePopup={this.togglePopup} />}
        <div className={"App-header"}>
            <h1>Microblogger</h1>
            <Button onClick={this.togglePopup} label={"Post"}/>
        </div>
        <div className="App-container" ref={this.messageContainer} />
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
            (<ul className={"App-postsContainer"}>
                {
                    jsonResponse.map((postProps: PostProps) => {
                        return <Post {...postProps} key={postProps.id}/>;
                    })
                }
            </ul>),
            this.messageContainer.current);
    }
  };

  private readonly togglePopup = () => {
    this.setState({
        showAddPost: !this.state.showAddPost
    });
  }
}

