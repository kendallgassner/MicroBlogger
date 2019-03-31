import React from 'react';
import {mount, shallow} from 'enzyme';
import Button from '../button';

const command = jest.fn();

describe('Button', () => {
  afterEach(() => {
    command.mockReset();
  });

  test('Renders as expected', () => {
    const subject = shallow(<Button label={'Test Button'} onClick={command} />);
    expect(subject.length).toBe(1);
  });

  test('onClick calls callback', () => {
    const subject = shallow(<Button label={'Test Button'} onClick={command} />);
    subject.simulate('click');
    expect(command).toBeCalled();
  });
});
