const initialState = []

export default function eventShow(state = initialState, action) {
    switch (action.type) {
        case "SHOW_EVENT":
            return [action.event]
        default:
            return state
    }
}