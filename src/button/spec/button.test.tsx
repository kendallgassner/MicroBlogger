import React from 'react';
import {shallow} from "enzyme";
import Button from "../button";

const command = jest.fn();

describe("Button", () => {
    test("Renders as expected", () => {
        const subject = shallow(<Button label={'Test Button'} onClick={command}/>);
        expect(subject.length).toBe(1);
    });

    test("onClick calls callback", () => {
        const subject = shallow(<Button label={'Test Button'} onClick={command}/>);
        subject.simulate('click');
        expect(command).toBeCalled();
    });

    test("onKeyDown calls callback", () => {
        const subject = shallow(<Button label={'Test Button'} onClick={command}/>);
        subject.simulate('keyDown', {key: 'Enter'});
        expect(command).toBeCalled();
    });
});