export function managePresents (action, state) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    default:
      return state
      
  }
}