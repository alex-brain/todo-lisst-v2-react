import reducer from '../../utils/reducer';
import {types} from './actions';


const initState = {
  list: [
    {
      id: 1,
      title: 'task 1',
      description: 'description 1',
      active: true,
      priority: 'normal'
    },
    {
      id: 2,
      title: 'task 2',
      description: 'description 2',
      active: false,
      priority: 'high'
    },
    {
      id: 3,
      title: 'task 3',
      description: 'description 3',
      active: true,
      priority: 'highest'
    }
  ]
};

export default reducer(initState, {
  [types.INIT]: (state) => {
    return {
      ...state,
    };
  },
});

