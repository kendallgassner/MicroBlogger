import React from 'react';
import AddPost from "./AddPost";
import './css/App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Banner from "./Banner/Banner";

interface AppState {
    showBanner: boolean;
    bannerMessage: string;
    isError: boolean;
}

export default class App extends React.Component<{}, AppState> {
    state = {
        showBanner: false,
        bannerMessage: '',
        isError: false
    };

  render() {
    const {showBanner, bannerMessage, isError} = this.state;
    return (
      <Router>
          <div className="App">
             {showBanner && <Banner isError={isError} closeBanner={this.closeBanner} message={bannerMessage}/>}
            <h1>Microblogger</h1>
            <Route path="/" exact
                   component={this.createHome}
            />

            <Route path="/Post" exact component={this.createAddPost} />
          </div>
      </Router>
    );
  }

    private readonly closeBanner = () => {
        this.setState({
            showBanner: false,
            bannerMessage: '',
            isError: false,
        });
    };

    private readonly updateBanner = (message: string, isError: boolean) => {
        this.setState({
            showBanner: true,
            bannerMessage: message,
            isError: isError
        });
    };

    private readonly createHome = () => <Home updateBanner={this.updateBanner}/>;
    private readonly createAddPost = (props: any) => <AddPost updateBanner={this.updateBanner} {...props}/>;
}

