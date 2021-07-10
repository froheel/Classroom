const initState = {
    auth: null
}

export const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return action.payload
        case "SIGN_OUT":
            return null
        default:
            return state
    }

}

