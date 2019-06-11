
export function manageFriends (state, action) {
  console.log(state.friends)
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend)
      return { friends: state.friends }
    case 'REMOVE_FRIEND':
      state.friends.filter(friend => friend !== action.friend)
      return state
    default :
      return state
  }
}