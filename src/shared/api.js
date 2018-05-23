import Request from 'axios';

let app;

/**
 * Performs a GET if executed in the browser,
 * dispatches the request to the express js app otherwise
 *
 * If the URL is external, performs the request normally using HTTP
 * @param {string} url url to fetch
 */
export function get(url) {
    if (typeof app === 'undefined' || url.indexOf('/') !== 0) {
        return Request.get(url);
    } else {
        return new Promise((resolve, reject) => {
            app.runMiddleware(url,
                (code, data) => {
                    try {
                        data = JSON.parse(data);
                        resolve({
                            data,
                        })
                    } catch (error) {
                        reject({
                            data: error
                        });
                    }


                });
        });
    }
}

/**
 * Set app to be used to invoke internal route rather than external
 * API calls
 * @param {App} expressApp Express.js App
 */
export function useApp(expressApp) {
    app = expressApp;
}

export function hasApp() {
    return !!app;
}