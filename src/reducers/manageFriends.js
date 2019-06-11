
export function manageFriends (state, action) {
  console.log(state.friends)
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...action.friend, ...state.friends] }
    default :
      return state
  }
}