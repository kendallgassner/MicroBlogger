import {getRequest} from "../Request";

let onLoad: any;
let onError: any;
let onTimeOut: any;
let httpRequest: any;
const response = '[{"userId": 1, "id": 1,"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia e expedita et cum\\nreprehenderit molest"}]';


//https://stackoverflow.com/questions/28584773/xhr-testing-in-jest
const createXHRMock = (status: number) => {
    const readyState = 4;

    const open = jest.fn();
    const send = jest.fn().mockImplementation(function () {
        onLoad = this.onload.bind(this);
        onError = this.onerror.bind(this);
        onTimeOut = this.ontimeout.bind(this);
    });

    const xhrMockClass = function () {
        return {
            status,
            readyState,
            response,
            open,
            send
        };
    };

    httpRequest = (<any>window).XMLHttpRequest = jest.fn().mockImplementation(xhrMockClass);
};

describe("HttpRequest GET", () => {
    test("bad status", done => {
        createXHRMock(400);
        const promise = getRequest(
            "http://testing",
        );

        onLoad();
        promise.catch(e => {
            expect(e).toEqual("Loaded: 400 undefined");
            done();
        });
    });

    test("onTimeOut", done => {
        createXHRMock(400);
        const promise = getRequest(
            "http://testing",
        );

        onTimeOut();
        promise.catch(e => {
            expect(e).toEqual("timeout Error");
            done();
        });
    });
    test("onError", done => {
        createXHRMock(400);
        const promise = getRequest(
            "http://testing",
        );
        onError();
        promise.catch(e => {
            expect(e).toEqual("Network Error");
            done();
        });
    });
    test("Successful Call", done => {
        createXHRMock(200);
        const promise = getRequest(
            "http://testing",
        );

        onLoad();
        promise.then((data: any) => {
            expect(data).toEqual(response);
            done();
        });
    });
});