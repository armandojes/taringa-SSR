import initial_state from '../../initial_state.js';
import createFlux from '../../createFlux.js';
import { combineReducers } from 'redux';

const [ reducers, actions ] = createFlux(initial_state.pages.post, 'pages/post');
const { set_loading, set_data } = actions;

export default combineReducers(reducers);
