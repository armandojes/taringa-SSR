import { combineReducers } from 'redux';
import postReducer from './post/flux'
import userReducer from './user/flux'

export default combineReducers({post: postReducer, user: userReducer})
