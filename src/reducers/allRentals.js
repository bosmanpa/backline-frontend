const initialState = []

export default function allRentals(state = initialState, action) {
    switch (action.type) {
        case "SET_ALL_RENTALS":
            return action.rentals
        case "UPDATE_ALL_RENTALS": 
            return [...state, action.rental]
        default:
            return state
    }
}