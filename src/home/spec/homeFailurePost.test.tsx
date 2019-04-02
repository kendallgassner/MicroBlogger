import React from 'react';
import {mount} from 'enzyme';
import Home from '../Home';
import App from '../../app/App';
import Banner from '../../banner/Banner';
const updateBanner = jest.fn();

jest.mock('../../services/Request', () => {
  return {
    getRequest: jest.fn(() => Promise.reject('failure')),
  };
});

describe('Home', () => {
  test('parses json and catches error', done => {
    const subject = mount(
      <App>
        <Home updateBanner={updateBanner} />
      </App>
    );

    process.nextTick(() => {
      expect(subject.html()).toContain('Banner');
      done();
      subject.unmount();
    });
  });
});
