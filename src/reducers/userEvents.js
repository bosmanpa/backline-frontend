export default function userEvents(state = {}, action) {
    switch (action.type) {
        case "SET_USER_EVENTS":
            return{
                events: action.events
            }
        default:
            return state
    }
}