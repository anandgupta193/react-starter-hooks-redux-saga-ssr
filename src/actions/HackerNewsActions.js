import { GET_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';

export const getHackerNews = (payload) => ({
    type: GET_HACKER_NEWS,
    payload,
});