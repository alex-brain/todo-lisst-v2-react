export const types = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export default {
  create: (data) => {
    return dispatch => dispatch({type: types.CREATE, payload: data});
  },
  update: (data) => {
    return dispatch => dispatch({type: types.UPDATE, payload: data});
  },
  delete: (data) => {
    return dispatch => dispatch({type: types.DELETE, payload: data});
  },
};
