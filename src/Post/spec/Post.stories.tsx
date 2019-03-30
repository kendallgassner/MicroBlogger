import React from 'react';
import { storiesOf } from '@storybook/react';
import {text, number} from '@storybook/addon-knobs';
import Post from "../Post";

storiesOf('Post', module)
    .add('sample', () => (
        <Post
            userId={number("userId", 1925)}
            title={text("title", "The Great Gatsby")}
            body={text("body", "He didn't say any more but we've always been unusually communicative in a reserved way and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgements, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores. ")}
        />
    ));