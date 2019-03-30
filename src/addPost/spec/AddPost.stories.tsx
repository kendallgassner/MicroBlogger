import React from 'react';
import { storiesOf } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import AddPost from "../AddPost";

storiesOf('AddPost', module)
    .add('sample', () => (
        <AddPost
            updateBanner={action("updateBanner")}
        />
    ));