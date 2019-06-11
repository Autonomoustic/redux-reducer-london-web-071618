
export function manageFriends (state, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: {...state.friends} }
    default :
      return state
  }
}