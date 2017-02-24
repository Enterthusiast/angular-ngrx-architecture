export function titleReducer(state: string = 'Hello World', action: Action) {
  switch (action.type) {
    case 'NEW_TITLE':
      return action.payload;
    default:
      return state;
  }
};