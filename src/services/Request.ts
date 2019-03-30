/**
 * Creates a GET XMLHttpRequest to receive data
 * @param {string}   requestUri the uri to retrieve data from.
 * @return {Promise} resolves if the GET Request was successful.
 */
export function getRequest(requestUri: string) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.open("Get", requestUri);

        request.onload = () => {
            if (request.status == 200) {
                resolve(request.response);
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

        request.send();

    });
};

/**
 * Creates a POST XMLHttpRequest to receive data
 * @param {string}  requestUri the uri to send data to.
 * @param {string}  data the content to send to the requestUri.
 * @return {Promise} resolves if the POST Request was successful.
 */
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