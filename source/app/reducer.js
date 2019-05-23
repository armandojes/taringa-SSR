import { combineReducers } from 'redux';
import postsReducer from './flux/posts';
import pagesReducers from './pages/reducer';

export default combineReducers({posts: postsReducer, pages: pagesReducers})
