import React from 'react';
import {shallow} from "enzyme";
import Post from "../Post";


describe("Post", () => {
    test("Renders as expected", () => {
        const subject = shallow(<Post title={'title'} body={'body'} id={2} userId={2}/>);
        expect(subject.length).toBe(1);
    });

});