import { GET_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';

const initialState = {
    name: '',
};

export const HackerNewsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_HACKER_NEWS:
            return { ...state,  name: action.payload.name};
        default:
            return state;
    }
}