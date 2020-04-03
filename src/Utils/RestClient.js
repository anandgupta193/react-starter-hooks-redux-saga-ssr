import { API_URL_HOST, API_VERSION, HTTP_VERB, USE_MOCK_APIS } from './Constant';
import { NEWS_FEED_MOCK } from './Mocks';

export const RestClient = {
    get: async (requestObject) => {
        const url = API_URL_HOST + API_VERSION + requestObject.url;
        let data = {};
        if(USE_MOCK_APIS) {
            data = NEWS_FEED_MOCK;
        } else {
            const response = await fetch(url, { method: HTTP_VERB.GET });
            data = response.json();
        }
        return data;
    }
};