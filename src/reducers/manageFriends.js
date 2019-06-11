
export function manageFriends (state, action) {
  console.log(action)
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: {...action.friend, ...state.friends} }
    default :
      return state
  }
}