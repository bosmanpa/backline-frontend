const initialState = []

export default function allOwnedEquipment(state = initialState, action) {
    switch (action.type) {
        case "SET_ALL_OWNED_EQUIPMENT":
            return action.equipments
        default:
            return state
    }
}