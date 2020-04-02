import { GET_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';

export const getHackerNews = payload => ({
    payload,
    type: GET_HACKER_NEWS,
});