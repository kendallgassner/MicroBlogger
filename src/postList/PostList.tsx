import React from 'react';
import Post, {PostProps} from '../post/Post';
import '../css/Home.css';
import {List, ListRowProps, AutoSizer, ArrowKeyStepper, ScrollIndices} from 'react-virtualized';
import 'react-virtualized/styles.css';

interface PostListProps {
  list: Array<PostProps>;
}

interface PostListState {
  focused: number;
}

export default class PostList extends React.Component<PostListProps, PostListState> {
  state = {
    focused: 0,
  };

  render() {
    const {list} = this.props;
    const {focused} = this.state;
    return (
      <div>
        <ArrowKeyStepper
          columnCount={1}
          rowCount={list.length}
          scrollToRow={focused}
          onScrollToChange={this.selectCell}
          mode="cells"
        >
          {({onSectionRendered, scrollToRow}) => {
            return (
              <AutoSizer disableHeight={true}>
                {({width}) => (
                  <List
                    onSectionRendered={onSectionRendered}
                    width={width}
                    height={600}
                    rowCount={list.length}
                    rowHeight={200}
                    rowRenderer={this.rowRenderer}
                    overscanRowCount={10}
                    scrollToIndex={scrollToRow}
                    scrollToRow={scrollToRow}
                    aria-label={'microBlogger feed'}
                    role={'list'}
                  />
                )}
              </AutoSizer>
            );
          }}
        </ArrowKeyStepper>
      </div>
    );
  }

  private readonly rowRenderer = (listRowProps: ListRowProps): React.ReactNode => {
    return (
      <div key={listRowProps.key} style={listRowProps.style} role={'listitem'}>
        <Post {...this.props.list[listRowProps.index]} />
      </div>
    );
  };

  private readonly selectCell = (scrollIndices: ScrollIndices) => {
    this.setState({focused: scrollIndices.scrollToRow});
  };
}
