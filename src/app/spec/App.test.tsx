import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {mount} from "enzyme";
import Home from "../../home/Home";
import Button from "../../button/button";

function mountMock(this: any) {
  this.props.updateBanner('message', true);
};


describe("Button", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Home initially', () => {
    const subject = mount(<App />);
    expect(subject.find(Home).length).toBe(1);
  });

  it('updateMock', () => {
    Home.prototype.componentDidMount = mountMock;
    const subject = mount(<App />);
    expect(subject.state('isError')).toBe(true);
    expect(subject.state('bannerMessage')).toBe('message');
    expect(subject.state('showBanner')).toBe(true);
  });

  it('closeBanner', done => {
    Home.prototype.componentDidMount = mountMock;
    const subject = mount(<App />);

    process.nextTick(() => {
      expect(subject.find('Banner').length).toBe(1);
      subject.find('Banner').find('button').simulate('click');
      expect(subject.find('Banner').length).toBe(0);
      done();
    });
  });

});
