
import { Types } from '../constants/user-types';

export default function userlistReducer(state = [], action) {
    switch (action.type) {
        case Types.UPDATE_USER_LIST:
            return action.payload;
        default:
            return state;
    }
}