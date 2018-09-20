import reducer from '../../../utils/reducer';
import {types} from './actions.js';

const initState = {
  data: {
    title: '',
    description: '',
    completed: false,
    priority: 'обычная',
    dueTime: '',
    executionTime: ''
  },
  options: {
    priority: [
      'обычная',
      'важная',
      'очень важная'
    ]
  },
  errors: {}
};

export default reducer(initState, {

  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },

  [types.CHANGE]: (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  },

  [types.RESET]: (state) => {
    return {
      ...state,
      data: {
        title: '',
        description: '',
        completed: false,
        priority: 'обычная',
        dueTime: '',
        executionTime: ''
      }
    };
  },

  [types.SUBMIT_SUCCESS]: (state) => {
    return {
      ...state,
      errors: {}
    };
  },

  [types.SUBMIT_FAILURE]: (state, action) => {
    return {
      ...state,
      errors: action.payload
    };
  },
});

