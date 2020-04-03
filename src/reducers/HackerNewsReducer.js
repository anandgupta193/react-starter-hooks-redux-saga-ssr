import { RENDER_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';

const initialState = {
    data: {
        hits: [],
    },
};

export const HackerNewsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case RENDER_HACKER_NEWS:
            console.log('I am in reducer', action.payload);
            const hits = state.data.hits.concat(action.payload.hits);
            return { ...state,  data: {
                ...state.data,
                hits,
            }};
        default:
            return state;
    }
}