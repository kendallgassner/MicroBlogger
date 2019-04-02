import React from 'react';
import {mount, shallow} from 'enzyme';
import PostList from '../PostList';

function renderMock(this: any) {
  return this.rowRenderer({index: 0, key: '1', style: {}});
}

function mountMock(this: any) {
  this.selectCell({scrollToRow: 1, scrollToColumn: 2});
}

const postList = [{title: 'title', body: 'this is the body', id: 2, userId: 3}];

describe('List', () => {
  test('Renders as expected', () => {
    const subject = shallow(<PostList list={postList} />);
    expect(subject.length).toBe(1);
  });

  test('rowRender renders a post', () => {
    PostList.prototype.render = renderMock;

    const subject = mount(<PostList list={postList} />);

    expect(subject.find('.Post-container').length).toBe(1);

    subject.unmount();
  });

  test('selectCell updates the state to the correct Index', () => {
    PostList.prototype.componentDidMount = mountMock;

    const subject = mount(<PostList list={postList} />);

    expect(subject.state('focused')).toBe(1);

    subject.unmount();
  });
});
