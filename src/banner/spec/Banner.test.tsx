import React from 'react';
import {shallow} from "enzyme";
import Banner from "../Banner";

const closeBanner = jest.fn();

describe("Banner", () => {
    test("Renders as expected", () => {
        const subject = shallow(<Banner isError={true} closeBanner={closeBanner} message={"BannerTest"}/>);
        expect(subject.length).toBe(1);
    });

    test("closeBanner is called onClick Button", () => {
        const subject = shallow(<Banner isError={true} closeBanner={closeBanner} message={"BannerTest"}/>);
        subject.find('button').simulate('click');
        expect(closeBanner).toBeCalled();
    });

    test("closeBanner is called onKeyDown Button", () => {
        const subject = shallow(<Banner isError={true} closeBanner={closeBanner} message={"BannerTest"}/>);
        subject.find('button').simulate('keyDown', {key: 'Enter'});
        expect(closeBanner).toBeCalled();
    });

    test("isError is true", () => {
        const subject = shallow(<Banner isError={true} closeBanner={closeBanner} message={"BannerTest"}/>);
        expect(subject.hasClass('Banner-error')).toEqual(true);
        expect(subject.hasClass('Banner-success')).toEqual(false);
    });

    test("isError is false", () => {
        const subject = shallow(<Banner isError={false} closeBanner={closeBanner} message={"BannerTest"}/>);
        expect(subject.hasClass('Banner-error')).toEqual(false);
        expect(subject.hasClass('Banner-success')).toEqual(true);
    });

});