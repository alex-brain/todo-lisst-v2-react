import { tasks } from '../../actions';

export const types = {
  CHANGE: 'CHANGE',
  RESET: 'RESET',
  SUBMIT_SUCCESS: 'SUBMIT_SUCCESS',
  SUBMIT_FAILURE: 'SUBMIT_FAILURE',
};

const formCreateTaskActions = {

  change: (data) => {
    return dispatch => dispatch({
      type: types.CHANGE,
      payload: data
    });
  },

  reset: () => {
    return dispatch => dispatch({type: types.RESET});
  },

  submit: (data) => {
    return (dispatch) => {
      if (!data.title) {
        const errors = {
          title: 'Название задачи обязательно для ввода!',
        };
        dispatch({type: types.SUBMIT_FAILURE, payload: errors});
        return false;
      } else {
        dispatch({type: types.SUBMIT_SUCCESS});
        const id = Math.round(Math.random() * 1000000);
        dispatch(tasks.create({id, ...data}));
        dispatch(formCreateTaskActions.reset());
        return true;
      }
    };
  }
};

export default formCreateTaskActions;

