import initial_state from '../../initial_state.js';
import createFlux from '../../createFlux.js';
import { combineReducers } from 'redux';
import api from '../../api'

export const load_post = (id_post) => async (dispatch, getState) => {
  dispatch(set_loading(true));
  const id = getState().pages.post.id;
  const response  = await api.posts.get_single(id);
  dispatch(set_data(response));
  dispatch(set_loading(false));
}

const [ reducers, actions ] = createFlux(initial_state.pages.post, 'pages/post');
const { set_loading, set_data, set_id, set_initialState } = actions;

export {
  set_id,
  set_initialState,
}

export default combineReducers(reducers);
