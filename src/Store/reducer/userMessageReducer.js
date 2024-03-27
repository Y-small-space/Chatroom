const userMessageReducer = (prevState = {
  user: {}
}, action) => {
  let newState = { ...prevState }
  switch (action.type) {
    case "user-message":
      newState.user = action.payload
      return newState
    default:
      return prevState
  }
}

export default userMessageReducer;