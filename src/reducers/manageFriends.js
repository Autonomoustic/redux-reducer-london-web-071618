
export function manageFriends (state, action) {
  console.log(state.friends)
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend)
      return { friends: state.friends }
    case 'REMOVE_FRIEND':
      const newState = state.friends.filter(friend => friend !== action.friend)
      return newState
    default :
      return state
  }
}