import initial_state from '../initial_state';
import api from '../api';
import createFlux from '../createFlux';
import { combineReducers } from 'redux';

//c u s t o m    r e d u c e r s
function items (state, payload){
  return state.concat(payload);
}


const [reducers, actions] = createFlux(initial_state.posts, 'posts', {items});
const { set_loading, set_items, set_page} = actions;

// a s y n c   a c t  i o n s

export const load_posts = () => async (dispatch, getState) => {
  const state = getState();
  if (state.posts.loading) return false;
  dispatch(set_loading(true));
  const page = state.posts.page
  const response = await api.posts.get_list(page + 1);
  dispatch(set_items(response));
  dispatch(set_page(page + 1))
  dispatch(set_loading(false))
}

export default combineReducers(reducers);
