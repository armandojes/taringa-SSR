import initial_state from '../initial_state';
import createFlux from '../createFlux';
import { combineReducers } from 'redux';

const [reducers, actions] = createFlux(initial_state.posts, 'posts');
const { set_loading, set_data } = actions;

export default combineReducers(reducers);
