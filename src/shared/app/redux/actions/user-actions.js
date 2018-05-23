import { Types } from '../constants/user-types';
import Request from 'axios';
import { get } from '../../../api.js';

export function getNameIfNeeded(id) {
    return async function (dispatch, getState) {

        const currentState = getState();

        if (currentState.user && currentState.user.name) {
            return Promise.resolve();
        }

        dispatch({
            type: Types.REQUEST_UPDATE_NAME,
        });

        let {data} = await getUserFromAPI(id);

        dispatch({
            type: Types.UPDATE_NAME,
            payload: data
        });
    }
}

function getUserFromAPI(id) {
    return get(`/api/v1/users/${id}`);
}

function getUserList() {
    return async function(dispatch) {
        dispatch({
            type: Types.REQUEST_USER_LIST,
        });

        const { data } = await get('/api/v1/userlist');
        dispatch({
            type: Types.UPDATE_USER_LIST,
            payload: data,
        });
    }
}

export function getUserListIfNeeded() {
    return function(dispatch, getState) {
        const currentState = getState();

        if (currentState.userlist.length > 0) {
            return Promise.resolve();
        }

        return dispatch(getUserList());
    }
}