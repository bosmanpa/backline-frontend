const initialState = []

export default function allRentals(state = initialState, action) {
    switch (action.type) {
        case "SET_ALL_RENTALS":
            return action.rentals
        default:
            return state
    }
}