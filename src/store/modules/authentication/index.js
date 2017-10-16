import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

// initial state
const state = {
  userInfo: null,
  token: null,
  isAuthorized: false
};

export default {
  state,
  getters,
  actions,
  mutations
};
