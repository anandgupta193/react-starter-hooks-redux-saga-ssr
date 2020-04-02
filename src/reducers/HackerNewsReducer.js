import { RENDER_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';

const initialState = {
    name: '',
};

export const HackerNewsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case RENDER_HACKER_NEWS:
            return { ...state,  data: action.payload};
        default:
            return state;
    }
}