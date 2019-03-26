const intialState = {
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

export const save = (body, key) => ({
  type: 'SAVE',
  body: body,
  __keyValue__: key
});

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case 'SAVE':
      console.log('SAVE');
      break;

    default:
      return state;
  }
}

export function createCrudWithNamedType(crudName = '') {
  return function crud(state = intialState, action) {
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
