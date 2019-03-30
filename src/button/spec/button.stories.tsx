import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from "../button";
import {select, text} from '@storybook/addon-knobs';
import {action} from "@storybook/addon-actions";

storiesOf('Button', module)
    .add('sample', () => (
        <Button
            label={text("Label", "Submit")}
            onClick={action('Button command')}
            form={text("formId", "form1")}
            type={select('type', ['button',"submit", "reset"], 'submit')}
        />
    ));