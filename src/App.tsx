import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

interface message {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default class App extends React.Component {
  private messageContainer  = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.grabMessages(this.parseResponse);
  }

  componentDidUpdate() {
    this.grabMessages(this.parseResponse);
  }

  render() {
    return (
      <div className="App">
        <div className={"App-header"}>
            <h1>Microblogger</h1>
            <button
                className={"App-button"}>
                <h3>Post</h3>
            </button>
        </div>
        <div className="App-container" ref={this.messageContainer} />
      </div>
    );
  }


  /** Is the best place to make the server request on Render */
  private readonly grabMessages = (callback: (request: string) => void) => {
      // create the request
      var request = new XMLHttpRequest();

      request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

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

  }

  private readonly parseResponse = (response: string) => {
    //check if array?
    const jsonResponse = JSON.parse(response);

    if (this.messageContainer && this.messageContainer.current) {
        ReactDOM.render(
        (<ul className={"App-postsContainer"}>
            {jsonResponse.map(this.createPost)}
        </ul>)
        ,
        this.messageContainer.current);



    }
  }

  // figure out the accessibility here
  private readonly createPost = (post: message) => {
    return (
        <li className={"App-postContainer"} key={post.id}>
           <div className={"App-postHeader"}>
            <h2 aria-label={post.title}> {post.title}</h2>
            <h3 aria-label={`Username: ${post.userId}`}>Username: {post.userId}</h3>
            </div>
            <p aria-label={post.body} className={"App-postBody"}>{post.body}</p>
        </li>
    );

  }

}

