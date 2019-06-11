export function managePresents (state, action) {
  switch (action.type) {
    case 'INCREASE':
      return {...state, state.numberOfPresents++ }
    default:
      return state
  }
}