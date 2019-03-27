import { createAction, handleActions, handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
const initialState = {
  status: {
    list: 'NOT_LOADED',
    detail: 'NOT_LOADED',
    edit: 'NOT_LOADED',
    save: 'NOT_LOADED',
    update: 'NOT_LOADED',
    delete: 'NOT_LOADED',
    filter: 'NOT_LOADED',
  },
  items: [{}],
  detail: {}
};

// export const save = (body, key) => ({
//   type: 'SAVE',
//   body: body,
//   __keyValue__: key
// });



export const save = createAction(
  'SAVE',
  body => body,
  key => ({ __keyValue__: key })
)

export function createCrudWithNamedTypeA(crudName = '') {
  return function crud(state = initialState, action) {

    const key = (() => {
      if (!action) {
        return false
      }
      if (!action.meta) {
        return false
      }
      if (!action.meta.__keyValue__) {
        return false
      }

      return action.meta.__keyValue__;
    })()

    if (key !== crudName) {
      return state;
    }

    console.log('action ==> ', action)
    const reducer = handleActions({
      [save]: (state, a, b) => {
        console.log('eitaa', state, a, b)
        return state;
      }
    }, state);

    return combineReducers({
      key: reducer
    })

  }
}

export function createCrudWithNamedType(crudName = '') {
  return function crud(state = initialState, action) {
    const { __keyValue__ } = action;

    if (__keyValue__ !== crudName) {
      return state;
    }

    switch (action.type) {
      case 'SAVE':
        console.log('SAVE');
        return {
          ...state,
          status: {
            ...state.status,
            save: action.body
          }
        }

      default:
        return state;
    }
  }
}
