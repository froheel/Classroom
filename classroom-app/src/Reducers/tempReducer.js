const initState = {
    hill: null
}

export const tempReducer = (state = initState, action) => {
    switch (action.type) {
        case "PILL":
            return "pillasda"
        case "PIN":
            return "pin"
        default:
            return state
    }

}
