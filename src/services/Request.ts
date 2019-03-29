export function getRequest(requestUri: string) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open("Get", requestUri);

        request.onload = () => {
            if (request.status == 200) {
                resolve(request.response);
                //callback(request.response);
            }
            else {
                //alert(`Loaded: ${request.status} ${request.statusText}`);
                reject(`Loaded: ${request.status} ${request.statusText}`);
            }
        };

        request.onerror = () => {
           // alert(`Network Error`);
            reject("Network Error");
        };

        request.ontimeout = () => {
           // alert(`time out Error`);
            reject("timeout Error");
        };

        request.send();

    });
};


export function postRequest(
    requestUri: string,
    data: string) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("POST", requestUri);

        request.onload = () => {
            if (request.status == 200 || request.status == 201) {
                resolve("Success");
            }
            else {
                reject(`Loaded: ${request.status} ${request.statusText}`);
            }
        };
        request.onerror = () => {
            reject("Network Error");
        };

        request.ontimeout = () => {
            reject("timeout Error");
        };

        request.send(data);
    });
}