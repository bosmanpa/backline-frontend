const initialState = []

export default function ownedEquipment(state = initialState, action) {
    switch (action.type) {
        case "SET_OWNED_EQUIPMENT":
            return action.equipments
        default:
            return state
    }
}