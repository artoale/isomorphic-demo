import { Types } from '../constants/user-types';

const initialState = {};
export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case Types.UPDATE_NAME:
            return {
                ...state,
                [action.payload.id]: {
                    name: action.payload.name,
                }
            };
        default:
            return state;
    }
}