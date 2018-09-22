import reducer from '../../utils/reducer';
import {types} from './actions';

const initState = {
  data: {
    priority: ['любая', 'обычная', 'важная', 'очень важная']
  }
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.TASK_FILTER_CHANGE]: (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  },
});

