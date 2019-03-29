import React from 'react';
import {shallow} from "enzyme";
import Banner from "../Banner";

describe("Banner", () => {
    test("Renders as expected", () => {
        const subject = shallow(<Banner isError={true} closeBanner={jest.fn()} message={"BannerTest"}/>);
        expect(subject.length).toBe(1);
    });

});