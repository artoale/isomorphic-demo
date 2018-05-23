import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import userlistReducer from './userlist-reducer';

const reducers = combineReducers({
    users: userReducer,
    userlist: userlistReducer
});

export default reducers;
