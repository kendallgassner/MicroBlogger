import React from 'react';
import {mount, ReactWrapper, shallow} from "enzyme";
import AddPost from "../AddPost";
import Button from "../../button/button";

// create props
const updateBanner = jest.fn();
const goBack = jest.fn();
const history  = {
    goBack: goBack
};

const props = {
    updateBanner: updateBanner,
    history: history
};

//mock the alert call
const alert = jest.fn();
global.alert = alert;

//mock the API call
jest.mock('../../services/Request', () => {
    return {
        postRequest: jest.fn(() => Promise.resolve(
             'success',
        )),
    }
});

const postRequest =  require('../../services/Request');

describe("AddPost", () => {
    test("Renders as expected", () => {
        const subject = shallow(<AddPost  updateBanner={updateBanner}/>);
        expect(subject.length).toBe(1);
    });

    describe("mount", () => {
        let subject : ReactWrapper;

        beforeEach(() => {
            subject = mount(<AddPost  {...props}/>);
        });

        afterEach(() => {
            subject.unmount();
        });

        test("alerts the user when submitting with body  > 140 characters", () => {
            subject.find('textarea').simulate('change', {target: {value: 'this message is too long this message is too long this message is too long this message is too long this message is too long this message is too longg'}});
            subject.find(Button).first().simulate('click');
            expect(alert).toBeCalled();
        });

        test("alerts the user when submitting with body < 10 characters", () => {
            subject.find('textarea').simulate('change', {target: {value: 'short'}});
            subject.find(Button).first().simulate('click');
            expect(alert).toBeCalled();
        });

        test("userId state is set when values are updated", () => {
            subject.find('input').first().simulate('change', {target: {value: 'username'}});
            expect(subject.state("userId")).toBe("username");
        });

        test(" title state is set when values are updated", () => {
            subject.find('input').at(1).simulate('change', {target: {value: 'the title field'}});
            expect(subject.state("title")).toBe("the title field");
        });

        test("body state is set when values are updated", () => {
            subject.find('textarea').simulate('change', {target: {value: 'the body field'}});
            expect(subject.state("body")).toBe("the body field");
        });

        test("validate close button calls goBack", () => {
            subject.find(Button).at(1).simulate('click');
            expect(goBack).toHaveBeenCalled();
        });

        test("postRequest is called with the correct params", done => {
            subject.find('input').first().simulate('change', {target: {value: 'username'}});
            subject.find('input').at(1).simulate('change', {target: {value: 'the title field'}});
            subject.find('textarea').simulate('change', {target: {value: 'the body field'}});
            subject.find(Button).at(0).simulate('click');

            process.nextTick(() => {
                expect(updateBanner).toHaveBeenCalledWith('success', false);
                done();
            })
        });

    });
});