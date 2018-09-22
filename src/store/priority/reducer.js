import reducer from '../../utils/reducer';

const initState = {
  data: ['обычная', 'важная', 'очень важная']
};

export default reducer(initState, {
  'INIT': (state) => {
    return {
      ...state,
    };
  }
});

