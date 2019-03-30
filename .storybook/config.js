import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../src', true, /\.stories\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}


addDecorator(withKnobs);

configure(loadStories, module);