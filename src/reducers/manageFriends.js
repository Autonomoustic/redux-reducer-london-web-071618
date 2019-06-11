
export function manageFriends (state, action) {
  console.log(state.friends)
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend)
      return { friends: state.friends }
    default :
      return state
  }
}