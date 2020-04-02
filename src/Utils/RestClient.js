import { API_URL_HOST, API_VERSION, HTTP_VERB } from './Constant';

export const RestClient = {
    get: async (requestObject) => {
    requestObject.url = API_URL_HOST + API_VERSION + requestObject.url;
    const response = await fetch(requestObject.url, {
        method: HTTP_VERB.GET,
    });
    const data = response.json();
    return data;
    }
};