import React from 'react';
import {shallow} from "enzyme";
import Button from "../button";

const command = jest.fn();

describe("Button", () => {
    afterEach(() => {
        command.mockReset();
    });

    test("Renders as expected", () => {
        const subject = shallow(<Button label={'Test Button'} onClick={command}/>);
        expect(subject.length).toBe(1);
    });

    test("onClick calls callback", () => {
        const subject = shallow(<Button label={'Test Button'} onClick={command}/>);
        subject.simulate('click');
        expect(command).toBeCalled();
    });

    test("onKeyDown calls callback when the key is Enter", () => {
        const subject = shallow(<Button label={'Test Button'} onClick={command}/>);
        subject.simulate('keyDown', {key: 'Enter'});
        expect(command).toBeCalled();
    });

    test("onKeyDown does not callback when the key is not Enter", () => {
        const subject = shallow(<Button label={'Test Button'} onClick={command}/>);
        subject.simulate('keyDown', {key: 'tab'});
        expect(command).not.toBeCalled();
    });
});