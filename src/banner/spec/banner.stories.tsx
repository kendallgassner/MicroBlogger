import React from 'react';
import { storiesOf } from '@storybook/react';
import {boolean, text} from '@storybook/addon-knobs';
import {action} from "@storybook/addon-actions";
import Banner from "../Banner";

storiesOf('Banner', module)
    .add('sample', () => (
        <Banner
            closeBanner={action("close banner command")}
            message={text("message", "Network Error.")}
            isError={boolean("is Error", true)}
        />
    ));