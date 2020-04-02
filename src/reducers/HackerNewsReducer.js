import { RENDER_HACKER_NEWS } from '../actionTypes/HackerNewsActionTypes';

const initialState = {
    name: '',
};

export const HackerNewsReducer = (state = initialState, action = {}) => {
    console.log("I am in reducer", action);
    switch (action.type) {
        case RENDER_HACKER_NEWS:
            return { ...state,  name: action.payload.name};
        default:
            return state;
    }
}