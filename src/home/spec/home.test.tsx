import React from 'react';
import {mount, shallow} from "enzyme";
import Home from "../Home";
import App from "../../app/App";
const updateBanner = jest.fn();

jest.mock('../../services/Request', () => {
    return {
        getRequest: jest.fn(() => Promise.resolve(
            '[{"userId": 1, "id": 1,"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia e expedita et cum\\nreprehenderit molest"}]'
        )),
    }
});


describe("Home", () => {
    test("Renders as expected", () => {
        const subject = shallow(<Home  updateBanner={updateBanner}/>);
        expect(subject.length).toBe(1);
    });

    test("parses json and creates posts", done => {
        const subject = mount(<App><Home  updateBanner={updateBanner}/></App>);
        process.nextTick(() => {
            expect(subject.find(Home).html()).toContain('ul');
            done();
        })
    });


});