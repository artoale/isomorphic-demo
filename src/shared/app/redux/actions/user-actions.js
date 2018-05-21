import { Types } from '../constants/user-types';
import Request from 'axios';
import { get } from '../../../api.js';

export function getName(id) {
    return async function (dispatch, getState) {
        let {data} = await getUserFromAPI(id);
        dispatch({ type: Types.UPDATE_NAME, payload: data });
    }
}

function getUserFromAPI(id) {
    return get(`/api/v1/users/${id}`);
}